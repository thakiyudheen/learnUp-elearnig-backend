import { userEntity } from "../../../../domain/entities/UserEntity";
import { User } from "../models";


interface PaginationData {
    students: userEntity[];
    totalItems: number;
    
}

export const getAllStudents = async  (data:{page:number,limit:number} ) : Promise < PaginationData | null > => {
    try {
       
        const { page = 1, limit = 10 } = data;
        console.log('page',data)
        const totalItems = await User.countDocuments({});
        const pageNumber = Math.max(1, page);
        const limitNumber = Math.max(1, limit);

        const students = await User.find({})
            .skip((pageNumber - 1) * limitNumber)
            .limit(limitNumber);


        if( !students ) {

            throw new Error('User finding Error ')
        }

        return {students,totalItems}

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}