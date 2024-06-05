import { User } from '../models'

export const resetPassword = async  ( email : string , password : string ) :  Promise< boolean | null > =>  {
    try {

         await User.updateOne( { email }  , { $set : { password : password } } )
        
            return true 

    } catch ( error : any ){

        throw new Error(error?.message);

    }
}