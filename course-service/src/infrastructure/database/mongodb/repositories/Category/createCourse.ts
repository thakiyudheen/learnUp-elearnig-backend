import { CourseEntity } from "@/domain/entities";
import Course from "../../models/course";



export const createCorse = async  ( categoryName : string  ) : Promise < CourseEntity | null> => {
    try {
 
        const course= await Course.create( { categoryName } ) ;

        if( !course ) {

            throw new Error('course Creation Failed ');
        }

        return course

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}