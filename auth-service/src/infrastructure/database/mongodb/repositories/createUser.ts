import { userEntity } from "../../../../domain/entities/UserEntity";
import { User } from "../models";


export const createUser = async  ( data : userEntity ) : Promise < userEntity | null > => {
    try {
       
        const user = await User.create( data ) ;

        if( !user ) {

            throw new Error('User Creation Failed ') ;

        }

        return user

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}