import nodemailer from 'nodemailer';
import {config} from 'dotenv';

config();
// dsf 

export const sendEmail = async (recipientEmail: string, OTP: string): Promise<void> => {
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_,
            pass: process.env.PASSWORD_
        }
    });

    transporter.verify((err, success) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Mail is OK");
        }
    });

    // Define email options
    const mailOptions = {
        from: process.env.EMAIL_,
        to: recipientEmail ,
        subject: 'learnUp e-learnig  pvt ltd',
        text: `Your OTP code is: ${OTP} ,Dont share your otp anyone`
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${recipientEmail}: ${info.messageId}`);
};
