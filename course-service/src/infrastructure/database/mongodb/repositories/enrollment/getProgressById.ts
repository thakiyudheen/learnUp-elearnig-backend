import { CourseEntity, EnrollmentEntity } from "@/domain/entities";
import { Enrollment } from "../../models/enrollmentModel";

interface Params {
    userId: string;
    courseId: string;
  }
 
  

export const getProgressById = async  (  data : Params ) : Promise < EnrollmentEntity > => {
    try {
 
      
        const enrollment = await Enrollment.findOne(data)
        .populate({
            path: 'courseId',
            populate: [
            {
                path: 'instructorRef',
                model: 'users', 
            },
            {
                path: 'category',
                model: 'categories', 
            }
            ]
        })
        

        console.log(enrollment)
        if( !enrollment ) {

            throw new Error('enrollment fetching Failed ');
        }

        return enrollment ;

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}