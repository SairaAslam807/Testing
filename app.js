import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({
    path: ".env",
});

const app = express();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS,
    }
})

const emailOptions = {
    from: process.env.USER_EMAIL,
    to: "saraonline807@gmail.com",
    subject: "Sending Email using Node.js",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
};

function sendEmail() {
    transporter.sendMail(emailOptions, (error, info) => {
        if (error) {
            console.log("Error while sending email", error);
        }
        else {
            console.log("Email sent", info);
        }
    })
}

sendEmail();

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});