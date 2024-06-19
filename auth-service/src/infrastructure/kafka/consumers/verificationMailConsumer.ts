import { updateVerificationMail } from "../../services/UpdateVerificationMail";

export default async ( data : { email : string , otp : string }) => {
    try {
        console.log('here otp reached --------------------------------------->', data)
        const { email , otp } = data ;
        
        await  updateVerificationMail( email , otp )

    } catch ( error : any ) {

        console.log('The error from -consumer', error.message);
        
    }
}