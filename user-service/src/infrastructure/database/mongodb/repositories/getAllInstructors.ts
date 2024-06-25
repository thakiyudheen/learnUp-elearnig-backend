// import { userEntity } from "../../../../domain/entities/UserEntity";
// import { User } from "../models";

// interface PaginationData {
//     instructors: userEntity[];
//     totalItems: number;
// }

// export const getAllInstructors = async  ( { data: { page?:number,limit?:number}}) : Promise < PaginationData | null > => {
//     try {
       
//         const instructor = await User.find( { role : 'instructor' , isVerified : true } ) ;

//         if( !instructor ) {

//             throw new Error('instructor finding Error ')
//         }

//         return instructor

//     } catch ( error : any ){

    
//         throw new Error(error?.message);

//     }
// }

import { userEntity } from "../../../../domain/entities/UserEntity";
import { User } from "../models";

interface PaginationData {
    instructors: userEntity[];
    totalItems: number;
}

interface PaginationInput {
    page?: number;
    limit?: number;
}

export const getAllInstructors = async ({ page = 1, limit = 10 }: PaginationInput): Promise<PaginationData | null> => {
    try {
        
        const pageNumber = Math.max(1, page);
        const limitNumber = Math.max(1, limit);

        
        const totalItems = await User.countDocuments({ role: 'instructor', isVerified: true });

        
        const instructors = await User.find({ role: 'instructor', isVerified: true })
            .skip((pageNumber - 1) * limitNumber)
            .limit(limitNumber);

        if (!instructors) {
            throw new Error('Error finding instructors');
        }

       

        return {
            instructors,
            totalItems,
        };
    } catch (error: any) {
        throw new Error(error?.message);
    }
};
