import { sendEmail } from "../../../_lib/utils/nodeMailer";
import { generateVerificationOTP } from "../../../_lib/utils/otp"
import sendVerificationMails from "../../../infrastructure/kafka/producer/sendVerificationMail";

export const sendVerificationMail = async ( email : string ) => {

        try{

    
            const otp = generateVerificationOTP() ;

            // send mail using nodemailer ---------------
            await sendEmail( email , otp )

            // kafka producer producing ------------------
             await sendVerificationMails( { email , otp} )
            

            
        } catch ( error : any ) {

            console.log("the Error from Notificaton service",error);

        }

}