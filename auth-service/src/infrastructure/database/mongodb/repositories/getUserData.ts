import { userEntity } from "@/domain/entities/UserEntity";
import { User } from "../models";


export const getUserData = async  ( _id : string ) : Promise < userEntity | null > => {

    try {
       
        const user = await User.findById( _id ) ;
       

        if( user ){ 

            return user ;

        }

        return  null
              

    } catch ( error : any ){

        throw new Error(error?.message);

    }
}