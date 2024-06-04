import nodemailer from 'nodemailer';
import {config} from 'dotenv';

config();

export const verifyRequestMail = async ( recipientEmail : string ): Promise<void> => {
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
        subject: 'learnUp e-learnig pvt-ltd',
        text: `We are pleased to inform you that your request to
         become an instructor with LearnUp has been accepted!`
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${recipientEmail}: ${info.messageId}`);
};
