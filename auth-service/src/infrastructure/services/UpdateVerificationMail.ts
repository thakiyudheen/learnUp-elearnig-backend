import { updateOtp } from "../database/mongodb/repositories/updataOtp";

 export const updateVerificationMail = async ( email : string , otp : string ) => {

    try {

        console.log('otp updation will on going')
        await updateOtp( email , otp)

    } catch( error : any ) {

        console.log('The error from update verification mail');
        
    }

}