import { userEntity } from "../../../../domain/entities/UserEntity";
import { User } from "../models";


export const getRequest = async  ( ) : Promise < userEntity[] | null > => {
    try {
       
        const requested  = await User.find( { role : 'instructor' } ) ;

        if( !requested ) {

            throw new Error('requestor finding Error ')
        }

        return requested

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}