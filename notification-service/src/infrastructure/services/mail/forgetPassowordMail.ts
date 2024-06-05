import { forgetPasswordMail } from "../../../_lib/utils/nodeMailer"

export const forgetPasswordEmail = ( data : { email : string , token : string }) =>{

    try {
        const client = process.env.CLIENT_URL
        forgetPasswordMail({email:data.email , url : `${client}?token=${data.token}`})

    } catch ( error : any ) {
        
    }
}