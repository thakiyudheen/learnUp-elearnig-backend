import { Assessment, AssessmentEntity } from "../../models";





export const getAllAssessments = async  (  data : any ) : Promise < AssessmentEntity[] > => {
    
    try {
 
        console.log('reached here but',data)

        const assessment = await Assessment.find( data ) ;
        
        if( !assessment ) {
            throw new Error('assessment Creation Failed ');
        }

        return assessment ;

    } catch ( error : any ){

        throw new Error(error?.message);

    }
}