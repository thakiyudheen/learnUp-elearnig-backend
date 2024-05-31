import { userEntity } from "@/domain/entities/UserEntity";
import { User } from "../models";


export const findUserByEmail = async  (email :string ) : Promise < userEntity | null > => {

    try {
       
        const user = await User.findOne({ email }) ;
       

        if( user ){ 

            return user ;

        }

        return  null
              

    } catch ( error : any ){

        throw new Error(error?.message);

    }
}