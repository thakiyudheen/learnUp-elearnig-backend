import { CourseEntity, EnrollmentEntity } from "@/domain/entities";
import { Enrollment } from "../../models/enrollmentModel";



export const createEnrollment = async  (  data : any ) : Promise < EnrollmentEntity > => {
    try {
 
        const enrollment = await Enrollment.create( data ) ;
        
        if( !enrollment ) {
            throw new Error('enrollment Creation Failed ');
        }

        

        return enrollment ;

    } catch ( error : any ){

        console.log('this error from create enroll repository')
        throw new Error(error?.message);

    }
}