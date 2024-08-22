import { forgetPasswordMail } from "../../../_lib/utils/nodeMailer"

export const forgetPasswordEmail = ( data : { email : string , token : string }) =>{

    try {
        console.log('forget password consumed');
        
        // const client = process.env.CLIENT_URL
        const client = "https://learn-up-elearning-frontend.vercel.app/resetPassword/"
        forgetPasswordMail({email:data.email , url : `${client}?token=${data.token}`})

    } catch ( error : any ) {
        
    }
}