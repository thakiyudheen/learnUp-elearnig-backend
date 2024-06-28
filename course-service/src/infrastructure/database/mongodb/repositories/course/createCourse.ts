import { CourseEntity } from "@/domain/entities";
import Course from "../../models/course";



export const createCourse = async  (  data : CourseEntity ) : Promise < CourseEntity > => {
    try {
 
        const course= await Course.create( data ) ;

        if( !course ) {

            throw new Error('course Creation Failed ');
        }

        return course

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}   