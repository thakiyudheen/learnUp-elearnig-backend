import { CourseEntity, EnrollmentEntity } from "@/domain/entities";
import { Enrollment } from "../../models/enrollmentModel";



export const getEnrollmentById = async  (  _id : string ) : Promise < EnrollmentEntity[] > => {
    try {
 

        
        const enrollment = await Enrollment.find( { userId :_id} ) ;
        
        if( !enrollment ) {

            throw new Error('enrollment fetching Failed ');
        }

        return enrollment ;

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}