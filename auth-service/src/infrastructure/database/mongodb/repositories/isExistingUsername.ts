import { User } from '../models'

export const isExistingUserName = async  ( username : string ) :  Promise<boolean | null> =>  {
    try {
        const isExisting = await User.findOne( { username : username } )
        
                if(!isExisting){

                    return true 
                    
                }

            return false

    } catch ( error : any ){

        throw new Error(error?.message);

    }
}