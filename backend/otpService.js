import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Function to send OTP
export const sendOTP = async (email, otp) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your OTP Code for Password Reset',
        text: `Your OTP code is: ${otp}. It is valid for 5 minutes.`
    };

    await transporter.sendMail(mailOptions);
};
