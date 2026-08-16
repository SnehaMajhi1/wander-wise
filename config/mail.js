import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport ({
    service: process.env.SMPT_SERVICE,
    auth: {
        user: process.env.SMPT_USER,
        pass: process.env.SMPT_PASSWORD,
    },
});

export default transporter;