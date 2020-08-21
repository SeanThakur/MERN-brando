require("dotenv").config();
const nodemailer = require("nodemailer");
const mailgun = require("nodemailer-mailgun-transport")

const auth = {
    auth: {
        api_key: '',
        domain: '',
    }
}

const transporter = nodemailer.createTransport(mailgun(auth));

const mailSend = (email,name,cb) => {

    let mailOptions = {
        from: 'brando.family.invitation@gmail.com',
        to: email,
        subject: "Welcome to BrandO Family",
        text: `${name} Thank you for joining our family, We hope you enjoy our services`
    }

    transporter.sendMail(mailOptions, (err,data) => {
        if(err)
        {
            cb(err, null);
        }else {
            cb(null, data);
        }
    });
    
}

module.exports = mailSend;