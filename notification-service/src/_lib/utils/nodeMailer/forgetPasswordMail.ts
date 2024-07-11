import nodemailer from 'nodemailer';
import {config} from 'dotenv';

config();

export const forgetPasswordMail = async ( data : {email : string , url : string} ): Promise<void> => {
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
        to: data.email ,
        subject: 'learnUp e-learnig pvt-ltd',
        html: `<p>Hi,</p>
        <p>We received a request to reset your password. Click the link below to reset your password:</p>
        <a href="${ data.url }">Reset Password</a>
        <p>If you did not request a password reset, please ignore this email.</p>
        <p>Thank you,</p>
        <p>Your Company Name</p>`
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${data.email}: ${info.messageId}`);
};
