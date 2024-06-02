import { userEntity } from "../../../../domain/entities/UserEntity";
import { User } from "../models";


export const getAllStudents = async  ( ) : Promise < userEntity[] | null > => {
    try {
       
        const students = await User.find( { role : 'student' } ) ;

        if( !students ) {

            throw new Error('User finding Error ')
        }

        return students

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}