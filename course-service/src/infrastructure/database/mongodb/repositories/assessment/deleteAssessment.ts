// import { Assessment, AssessmentEntity } from "../../models";





// export const deleteAssessment = async  (  data : any ) : Promise < void > => {
    
//     try {
 
//         console.log('reached here but',data)

//         const assessment = await Assessment.deleteOne( data ) ;
        
//         if( !assessment ) {
//             throw new Error('assessment Creation Failed ');
//         }

       

//     } catch ( error : any ){

//         throw new Error(error?.message);

//     }
// }

import { Assessment, AssessmentEntity } from "../../models";

export const deleteAssessment = async (data: any): Promise<void> => {
    try {
        const { courseId, _id } = data;

        
        const assessment = await Assessment.findOne({ courseId });

        if (!assessment) {
            throw new Error('Assessment not found');
        }

        
        const questionIndex = assessment.questions.findIndex((q: any) => q._id.toString() === _id);
        console.log('thissi the indexs',questionIndex)
        if (questionIndex === -1) {
            throw new Error('Question not found');
        }

       
        assessment.questions.splice(questionIndex, 1);
         console.log(assessment)
       
        await assessment.save();
    } catch (error: any) {
        throw new Error(error?.message);
    }
};
