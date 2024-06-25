import { CourseEntity, EnrollmentEntity } from "@/domain/entities";
import { Enrollment } from "../../models/enrollmentModel";

interface EnrollmentQueryParams {
    userId?: string;
    page: number;
    limit: number;
    search?: string;
    categories?: string[];
    levels?: string[];
    sort?: 'asc' | 'desc';
  }
  interface QueryType {
    [key: string]: any; // Define query as an object with string keys and any values
  }
  

export const getEnrollmentById = async  (  data : EnrollmentQueryParams ) : Promise < EnrollmentEntity[] > => {
    try {
 
        const skip = (data.page - 1) * data.limit;
        let query : QueryType = { userId: data.userId };
        if (data?.search?.trim().length && data?.search?.trim().length> 0) {
            query['courseId.courseTitle']   = { $regex: `.*${data.search}.*`, $options: 'i' } as any;
        }

        const enrollment = await Enrollment.find(query)
        .populate({
            path: 'courseId',
            populate: [
            {
                path: 'instructorRef',
                model: 'users', // Ensure this matches your actual model name for instructorRef
            },
            {
                path: 'category',
                model: 'categories', // Ensure this matches your actual model name for category
            }
            ]
        })
        .skip(skip)
        .limit(data?.limit);

        console.log(enrollment)
        if( !enrollment ) {

            throw new Error('enrollment fetching Failed ');
        }

        return enrollment ;

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}