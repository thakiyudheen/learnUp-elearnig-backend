import { userEntity } from "../../../../domain/entities/UserEntity";
import { User } from "../models";


export const updateUser = async  ( data : userEntity ) : Promise < userEntity | null > => {
    try {
       
        const { _id , ...datas} = data ;

        const  user  = await User.findByIdAndUpdate( _id ,{ ...datas } , { new : true } ) ;

        if( !user) {

            throw new Error('updating user Error ')
        }

        return user ;

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}