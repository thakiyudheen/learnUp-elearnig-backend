import { CourseEntity, EnrollmentEntity } from "@/domain/entities";
import { Enrollment } from "../../models/enrollmentModel";
import Course from "../../models/course";

interface Params {
    userId?: string;
    instructorId?:string;
  }
 
  

export const getInstructorsForChat = async  (  data : Params ) : Promise < EnrollmentEntity[] > => {
    try {
 
      console.log('the reached data',data)
        const enrollment = await Enrollment.find(data)
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
        }).populate('instructorId')

        console.log('this is enrollment',enrollment)
        
        if( !enrollment ) {

            throw new Error('fetching enrollment Failed ');
        }

        return enrollment ;

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}