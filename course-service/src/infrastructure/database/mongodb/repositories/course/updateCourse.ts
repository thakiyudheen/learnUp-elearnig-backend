import { CourseEntity } from "@/domain/entities";
import Course from "../../models/course";

interface data{
    _id : string,
    isBlocked ?: boolean,
    isPublished ?: boolean,
    isReject ?: boolean,
}


export const updateCourse = async  (  data : data ) : Promise < CourseEntity > => {
    try {
 
        
        const course = await Course.findByIdAndUpdate({
            _id: data._id
        }, data, {
            new: true
        });
        console.log('this is course',course)
        if( !course ) {

            throw new Error('course updation Failed ');
        }

        return course

    } catch ( error : any ){

        console.log('this is updatiing err',error)
        throw new Error(error?.message);

    }
}