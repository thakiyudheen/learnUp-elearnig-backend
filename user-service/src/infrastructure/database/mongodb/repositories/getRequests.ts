// import { userEntity } from "../../../../domain/entities/UserEntity";
// import { User } from "../models";


// export const getRequest = async  (  ) : Promise < userEntity[] | null > => {
//     try {
       
//         const requested  = await User.find( { role : 'instructor' } ) ;

//         if( !requested ) {

//             throw new Error('requestor finding Error ')
//         }

//         return requested

//     } catch ( error : any ){

    
//         throw new Error(error?.message);

//     }
// }

import { userEntity } from "../../../../domain/entities/UserEntity";
import { User } from "../models";

interface PaginationData {
    requested: userEntity[];
    totalItems: number;
}

interface PaginationInput {
    page?: number;
    limit?: number;
}

export const getRequest = async ({ page = 1, limit = 10 }: PaginationInput): Promise<PaginationData | null> => {
    try {
        // Validate and adjust page and limit values
        const pageNumber = Math.max(1, page);
        const limitNumber = Math.max(1, limit);

      
        const totalItems = await User.countDocuments({ role: 'instructor' });

        
        const requested = await User.find({ role: 'instructor' })
            .skip((pageNumber - 1) * limitNumber)
            .limit(limitNumber);

        if (!requested) {
            throw new Error('Error finding requestors');
        }

       
        const totalPages = Math.ceil(totalItems / limitNumber);

        return {
            requested,
            totalItems,
           
        };
    } catch (error: any) {
        throw new Error(error?.message);
    }
};
