const nodemailer = require("nodemailer");
const secrets=require("../eatfit/secrets");
async function mail() {

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

  let token="sjfksnfsjfsf sdfbjsbcskc";
  let dataObj={
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "imkrishna8737@gmail.com",
    subject: "Test 1", // Subject line
    html: `<b>Email Test token= ${token}</b>` // html body
  }
  // send mail with defined transport object
  let info = await transporter.sendMail(dataObj);
}

mail().then(function(){
    console.log("Mail sent");
}).catch(console.error);