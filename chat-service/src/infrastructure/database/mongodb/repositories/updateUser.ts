import { userEntity } from "../../../../domain/entities/UserEntity";
import { User } from "../models";


export const updateUser = async  ( data : userEntity ) : Promise < void > => {
    try {
       
        const { _id , ...datas} = data ;

        const  user  = await User.findByIdAndUpdate( _id ,{ ...datas } , { new : true } ) ;

        return 

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}