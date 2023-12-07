// server.js

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit-form', (req, res) => {
    const { name, phone, email } = req.body;

    const toEmail = 'michaelwblevins@gmail.com';

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'progamer4@yahoo.com',
            pass: 'h@rb1nger',
        },
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: toEmail,
        subject: 'New Connection Form Submission',
        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Form submitted successfully!');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
