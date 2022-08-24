const nodemailer = require("nodemailer");
const secrets=require("../secrets");
//mail sender
async function mailSender(user) {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service:"gmail",
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: secrets.APP_MAIL, 
        pass:secrets.APP_PASSWORD 
      }
    });
  
    let token=user.otp;
    let dataObj={
      from: `Food APP`,
      to: user.email,
      subject: "OTP",
      html: `<b>Your OTP is= ${token}</b>`
    }
    // send mail with defined transport object
    await transporter.sendMail(dataObj);
}

module.exports=mailSender;