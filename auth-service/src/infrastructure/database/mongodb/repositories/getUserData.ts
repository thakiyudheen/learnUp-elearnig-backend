import { userEntity } from "@/domain/entities/UserEntity";
import { User } from "../models";


export const getUser = async  ( userId : string ) : Promise < userEntity | null > => {

    try {
       
        const user = await User.findById({ userId }) ;
       

        if( user ){ 

            return user ;

        }

        return  null
              

    } catch ( error : any ){

        throw new Error(error?.message);

    }
}