import { userEntity } from "../../../../domain/entities/UserEntity";
import { User } from "../models";


export const getAllInstructors = async  ( ) : Promise < userEntity | null > => {
    try {
       
        const instructor = await User.findOne( { role : 'instructor' } ) ;

        if( !instructor ) {

            throw new Error('instructor finding Error ')
        }

        return instructor

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}