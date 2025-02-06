import nodemailer from "nodemailer"
import dotenv from "dotenv"

const sendEmail = async options => {
    const transport = {
        service:"gmail",
        auth: {
            user: process.env.NODE_MAILID,
            pass: process.env.NODE_PASS
        }
    } ;

    const transporter = nodemailer.createTransport(transport);

    const message = {
        from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
        to: options.email,
        subject: options.subject,
        text: options.message
    };

   await transporter.sendMail(message);
};

export default sendEmail;