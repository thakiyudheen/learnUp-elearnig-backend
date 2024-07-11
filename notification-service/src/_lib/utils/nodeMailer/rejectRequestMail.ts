import nodemailer from 'nodemailer';
import {config} from 'dotenv';

config();

export const rejectRequestMail = async ( recipientEmail : string ): Promise<void> => {
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
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>LearnUp Instructor Application</title>
        </head>
        <body>
            <div style="font-family: Arial, sans-serif; padding: 20px;">
                <h1 style="color: #FF0000;">Your Instructor Application Status</h1>
                <p>We regret to inform you that your request to become an instructor with LearnUp has been declined.</p>
                <p>We appreciate your interest in joining our team and encourage you to reapply in the future.</p>
                <p>Best regards,<br>LearnUp Team</p>
            </div>
        </body>
        </html>
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${recipientEmail}: ${info.messageId}`);
};
