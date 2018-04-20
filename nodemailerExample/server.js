//Nodemailer Code
var nodemailer = require('nodemailer');

var message = "The quick brown fox jumps over the lazy dog"
var toEmail = ""

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '8lternateusername@gmail.com',
    pass: 'password here'
  }
});

const mailOptions = {
  from: '8lternateusername@gmail.com', // sender address
  to: toEmail, // list of receivers
  subject: 'Nodemailer', // Subject line
  html: message // plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
  if (err)
    console.log(err)
  else
    console.log(info);
});