const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendResetPasswordEmail = (to, reset_code) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject: 'Password Reset Code',
        text: `Your password reset code is: ${reset_code}`,
    };
    return transporter.sendMail(mailOptions);
};

module.exports = {sendResetPasswordEmail};
