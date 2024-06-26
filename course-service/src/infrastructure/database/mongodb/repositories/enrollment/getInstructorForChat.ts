import { CourseEntity, EnrollmentEntity } from "@/domain/entities";
import { Enrollment } from "../../models/enrollmentModel";
import Course from "../../models/course";

interface Params {
    userId: string;
  }
 
  

export const getInstructorsForChat = async  (  data : Params ) : Promise < CourseEntity[] > => {
    try {
 
      
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
        })
        const courseId = enrollment.map((enrollment)=> enrollment?.courseId?._id)

        const course = await Course.find({_id: {$in: courseId}}).populate('instructorRef')
        
        if( !course ) {

            throw new Error('fetching instructor for chat  Failed ');
        }

        return course ;

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}