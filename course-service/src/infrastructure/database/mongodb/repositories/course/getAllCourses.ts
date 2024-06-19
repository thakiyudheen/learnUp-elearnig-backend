import { CourseEntity } from "@/domain/entities";
import Course from "../../models/course";



export const getAllCourse = async  ( data: { instructorRef?: string }  ) : Promise < CourseEntity[] | null> => {
    try {
 
        const course = await Course.find(data).populate('category').populate('instructorRef') ; 
       

        if(!course){

            return null
        }

        return course

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}