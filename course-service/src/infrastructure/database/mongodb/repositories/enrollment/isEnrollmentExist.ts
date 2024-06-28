
import { CourseEntity, EnrollmentEntity } from "@/domain/entities";
import { Enrollment } from "../../models/enrollmentModel";



export const getEnrollmentExist = async  (  data : any ) : Promise < EnrollmentEntity > => {
    try {
 
        const enrollment = await Enrollment.findOne( data ) ;
        
        if( !enrollment ) {
            throw new Error('enrollment exist check Failed ');
        }

        

        return enrollment ;

    } catch ( error : any ){

        console.log('this error from create enroll repository')
        throw new Error(error?.message);

    }
}