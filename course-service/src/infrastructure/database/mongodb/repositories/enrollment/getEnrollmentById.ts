// import { CourseEntity, EnrollmentEntity } from "@/domain/entities";
// import { Enrollment } from "../../models/enrollmentModel";

// interface EnrollmentQueryParams {
//     userId?: string;
//     page: number;
//     limit?: number;
//     search?: string;
//     categories?: string[];
//     levels?: string[];
//     sort?: 'asc' | 'desc';
//     instructorId ?:string;
//   }
//   interface QueryType {
//     [key: string]: any; // Define query as an object with string keys and any values
//   }
  

// export const getEnrollmentById = async  (  data : EnrollmentQueryParams ) : Promise < EnrollmentEntity[] > => {
//     try {
//         console.log('this is the enrollmen ',data)
//         const {limit=10}=data;
//         const skip = (data.page - 1) * limit;

//         let query:QueryType ;
//         if(data.instructorId&&!data.userId){
//              query  = {instructorId: data.userId }; 
//         }else if(data.userId&&!data.instructorId){
            
//              query = { userId: data.userId };
//         }else{
//              query = { userId: data.userId,instructorId:data.instructorId };
//         }

//         if (data?.search?.trim().length && data?.search?.trim().length> 0) {
//             query['courseId.courseTitle']   = { $regex: `.*${data.search}.*`, $options: 'i' } as any;
//         }

//         console.log("ddd",query)
//         const enrollment = await Enrollment.find(query)
//         .populate({
//             path: 'courseId',
//             populate: [
//             {
//                 path: 'instructorRef',
//                 model: 'users', // Ensure this matches your actual model name for instructorRef
//             },
//             {
//                 path: 'category',
//                 model: 'categories', // Ensure this matches your actual model name for category
//             }
//             ]
//         })
//         .skip(skip)
//         .limit(limit);

        
//         if( !enrollment ) {

//             throw new Error('enrollment fetching Failed ');
//         }

//         return enrollment ;

//     } catch ( error : any ){

    
//         throw new Error(error?.message);

//     }
// }

import { CourseEntity, EnrollmentEntity } from "@/domain/entities";
import { Enrollment } from "../../models/enrollmentModel";

interface EnrollmentQueryParams {
  userId?: string;
  page: number;
  limit?: number;
  search?: string;
  categories?: string[];
  levels?: string[];
  sort?: 'asc' | 'desc';
  instructorId?: string;
}

interface QueryType {
  [key: string]: any; // Define query as an object with string keys and any values
}

export const getEnrollmentById = async (data: EnrollmentQueryParams): Promise<EnrollmentEntity[]> => {
  try {
    console.log('this is the enrollment query params:', data);
    const { limit = 10 } = data;
    const skip = (data.page - 1) * limit;

    let query: QueryType = {};

    if (data.instructorId && !data.userId) {
      query = { instructorId: data.instructorId };
    } else if (data.userId && !data.instructorId) {
      query = { userId: data.userId };
    } else if (data.userId && data.instructorId) {
      query = { userId: data.userId, instructorId: data.instructorId };
    }

    if (data?.search?.trim().length && data?.search?.trim().length > 0) {
      query['courseId.courseTitle'] = { $regex: `.*${data.search}.*`, $options: 'i' } as any;
    }

    console.log("query:", query);

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
      .populate('userId')
      .skip(skip)
      .limit(limit);

    if (!enrollment) {
      throw new Error('Enrollment fetching failed');
    }

    return enrollment;

  } catch (error: any) {
    throw new Error(error?.message);
  }
}
