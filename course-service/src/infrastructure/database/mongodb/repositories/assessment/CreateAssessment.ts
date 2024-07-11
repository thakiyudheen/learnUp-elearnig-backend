// import { Assessment, AssessmentEntity } from "../../models";





// export const createAssessment = async  (  data : any ) : Promise < AssessmentEntity > => {
    
//     try {
 
//         console.log('reached here but',data)

//         const assessment = await Assessment.create( data ) ;
        
//         if( !assessment ) {
//             throw new Error('assessment Creation Failed ');
//         }

//         return assessment ;

//     } catch ( error : any ){

//         throw new Error(error?.message);

//     }
// }

import { Assessment, AssessmentEntity } from "../../models";

export const createAssessment = async (data: any): Promise<AssessmentEntity> => {
    try {
        console.log('Received data:', data);

        const { courseId, question, correctAnswer, options, instructorId } = data;

        // Find the existing assessment by courseId and instructorId
        let assessment = await Assessment.findOne({ courseId, instructorId });

        if (assessment) {
            // If assessment exists, update it with new data
            assessment.questions.push({
                question: question,
                correctAnswer: correctAnswer,
                options: options
            });
            await assessment.save();
        } else {
            // If no assessment exists, create a new document
            const newAssessment = {
                courseId: courseId,
                instructorId: instructorId,
                questions: [
                    {

                        question: question,
                        correctAnswer: correctAnswer,
                        options: options
                    }
                ]
            };
            assessment = await Assessment.create(newAssessment);

            if (!assessment) {
                throw new Error('Assessment creation failed');
            }
        }

        return assessment;
    } catch (error: any) {
        throw new Error(error?.message);
    }
};

// import { Assessment, AssessmentEntity } from "../../models";

// export const createAssessment = async (data: any): Promise<AssessmentEntity> => {
//     try {
//         console.log('Received data:', data);

//         const { courseId, question, correctAnswer, options, instructorId, isEditing, questionId } = data;

//         // Find the existing assessment by courseId and instructorId
//         let assessment = await Assessment.findOne({ courseId, instructorId });

//         if (isEditing && questionId) {
//             if (!assessment) {
//                 throw new Error('Assessment not found');
//             }

//             // Find the question within the assessment by questionId
//             const questionIndex = assessment.questions.findIndex((q: any) => q._id.toString() === questionId);
//             if (questionIndex === -1) {
//                 throw new Error('Question not found');
//             }

//             // Update the specific question
//             assessment.questions[questionIndex] = {
//                 ...assessment.questions[questionIndex],
//                 question: question,
//                 correctAnswer: correctAnswer,
//                 options: options
//             };
//         } else {
//             if (assessment) {
//                 // If assessment exists, add a new question
//                 assessment.questions.push({
//                     question: question,
//                     correctAnswer: correctAnswer,
//                     options: options
//                 });
//             } else {
//                 // If no assessment exists, create a new document
//                 const newAssessment = {
//                     courseId: courseId,
//                     instructorId: instructorId,
//                     questions: [
//                         {
//                             question: question,
//                             correctAnswer: correctAnswer,
//                             options: options
//                         }
//                     ]
//                 };
//                 assessment = await Assessment.create(newAssessment);

//                 if (!assessment) {
//                     throw new Error('Assessment creation failed');
//                 }
//             }
//         }

//         await assessment.save();
//         return assessment;
//     } catch (error: any) {
//         throw new Error(error?.message);
//     }
// };
