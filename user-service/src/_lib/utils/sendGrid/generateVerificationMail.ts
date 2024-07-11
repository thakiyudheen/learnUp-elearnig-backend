import sendGridMail from '@sendgrid/mail'
import {config} from 'dotenv'
config()

sendGridMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export const generateVerificationMail = async (
    data: {
        email: string,
        otp: string
    }
) => {
    let sendgridEmail = String( process.env.SEND_GRID_EMAIL )
    const message = {
        to: data.email,
        from: {
            name: "EduVerse Learning",
            email: sendgridEmail
        },
        subject: "LearnUp account verification OTP",
        text: "Please verify your account with this OTP",
        html: `<h2>Your OTP : ${data.otp}</h2>`
    };

    try {

         await sendGridMail.send(message)  

    } catch (error: any) {

        throw new Error(error.message || "send grid mail issue!");

    }
}