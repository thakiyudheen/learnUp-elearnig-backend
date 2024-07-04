// import { CourseEntity } from "@/domain/entities";
// import Course from "../../models/course";

// interface PaginationData {
//     courses: CourseEntity[];
//     totalItems: number;
   
// }

// export const getAllCourse = async (data: { instructorRef?: string, isPublished?: boolean, page?: number, limit?: number,isBlocked?:boolean }): Promise<PaginationData | null> => {
//     try {
//         const { page = 1, limit = n ,  ...rest } = data;
//         console.log('this is pagination', data);
        
//         const totalItems = await Course.countDocuments({...rest });
//         console.log('this is rest', totalItems);
        
//         const pageNumber = Math.max(1, page);
//         const limitNumber = Math.max(1, limit);

//         const courses = await Course.find({ ...rest })
//             .populate('category')
//             .populate('instructorRef')
//             .sort({ createdAt: -1 })
//             .skip((pageNumber - 1) * limitNumber)
//             .limit(limitNumber);

//         if (!courses) {
//             return null;
//         }

//         const totalPages = Math.ceil(totalItems / limitNumber);

//         return {
//             courses,
//             totalItems,
           
//         };
//     } catch (error: any) {
//         throw new Error(error?.message);
//     }
// };

import { CourseEntity } from "@/domain/entities";
import Course from "../../models/course";

interface PaginationData {
    courses: CourseEntity[];
    totalItems: number;
}

export const getAllCourse = async (data: { instructorRef?: string, isPublished?: boolean, page?: number, limit?: number, isBlocked?: boolean }): Promise<PaginationData | null> => {
    try {
        const { page = 1, limit, ...rest } = data;
        console.log('this is pagination', data);

        const totalItems = await Course.countDocuments({ ...rest });
        console.log('this is rest', totalItems);

        const coursesQuery = Course.find({ ...rest })
            .populate('category')
            .populate('instructorRef')
            .sort({ createdAt: -1 });

        let courses: CourseEntity[];

        if (limit) {
            const pageNumber = Math.max(1, page);
            const limitNumber = Math.max(1, limit);
            courses = await coursesQuery
                .skip((pageNumber - 1) * limitNumber)
                .limit(limitNumber);
        } else {
            courses = await coursesQuery;
        }

        if (!courses) {
            return null;
        }

        return {
            courses,
            totalItems,
        };
    } catch (error: any) {
        throw new Error(error?.message);
    }
};

