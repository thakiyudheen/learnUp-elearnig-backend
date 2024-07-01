
import { CourseEntity, EnrollmentEntity } from "@/domain/entities";
import { Enrollment } from "../../models/enrollmentModel";



export const isEnrollmentExist = async  (  data : any ) : Promise < EnrollmentEntity|null > => {
    try {
 
        const enrollment = await Enrollment.findOne( data ) ;
        
        if( !enrollment ) {
            return null
        }

        

        return enrollment ;

    } catch ( error : any ){

        console.log('this error from create enroll repository')
        throw new Error(error?.message);

    }
}