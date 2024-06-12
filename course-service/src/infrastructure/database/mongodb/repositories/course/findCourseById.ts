import { CourseEntity } from "@/domain/entities";
import Course from "../../models/course";



export const findCourseById = async  ( _id : string  ) : Promise < CourseEntity | null > => {
    try {
 
        const course = await Course.findById( _id ).populate('category').populate('instructorRef') ; 
       

        if(!course){
            return null
        }

        return course

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}