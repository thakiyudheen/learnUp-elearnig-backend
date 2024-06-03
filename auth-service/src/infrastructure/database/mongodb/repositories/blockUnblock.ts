import { userEntity } from "@/domain/entities/UserEntity";
import { User } from "../models";


export const blockUnblock = async  ( _id : string , status : boolean ) : Promise < void > => {

    try {
       
        const user = await User.updateOne( { _id } , { isBlocked : status }) ;

        if( !user ) {
            throw new Error('User Blocking error in auth-service ')
        }

        

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}