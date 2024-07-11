import { Otp  , User } from '../models'

export const verifyOtp = async  ( email : string , otp : string ) :  Promise<boolean | null> =>  {
    try {
        const isVerify = await Otp.findOne( { email , otp  } )
        
                if(! isVerify ){

                    return false
                    
                }
       

            return true

    } catch ( error : any ){

        throw new Error(error?.message);

    }
}