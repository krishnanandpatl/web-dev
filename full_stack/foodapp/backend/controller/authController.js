const FooduserModel = require("../model/usermodel");
const nodemailer = require("nodemailer");
//jsonweb token
const jwt = require("jsonwebtoken");

const secrets = require("../secrets");
//////////functions///////
async function signupController(req, res) {
    try {
        let data = req.body;
        console.log(data);
        //to create a document inside FooduserModel
        let newUser = await FooduserModel.create(data);
        console.log(newUser);
        res.status(201).json({
            result:"data recieved"
        });
    } catch (err) {
        res.status(400).json({
            result:err.message
        });
    }
}

async function loginController(req, res) {
    try {

        let { email, password } = req.body;
        if (email || password) {
            
            let user = await FooduserModel.findOne({ email: email });
            if (user) {
                if (user.password == password) {
                    //(payload=id+algo=sha256+Secret)=signature
                    const token = jwt.sign(
                        {
                            id: user["_id"],
                            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
                        },
                        secrets.JWTSECRET
                    );

                    //cookie
                    res.cookie("JWT", token);
                    res.status(200).json({
                        user
                    });
                } else {
                    res.status(401).json({
                        result:"Email or Password mismatch"
                    });
                }
            } else {
                res.status(404).json({
                    result:"User not Found"
                })
            }
        } else {
            res.status(401).json({
                result:"User not found kindly signup"
            });
        }
    } catch (err) {
        res.staus(500).json({
            result:err.message
        });
    }
}

async function forgotpasswordController(req, res) {
    try {
        let afterFiveMin=Date.now()+5*60*1000;

        let otp = otpgenerator();

        let { email } = req.body;

        let user = await FooduserModel.findOneAndUpdate(
            { email: email },
            { otp: otp ,otpExpiry:afterFiveMin},
            { new: true }
        );
        mail(user).catch(console.error);

        res.json({
            message: "OTP Sent"
        });
    } catch (err) {
        res.send(err.message);
    }
}

async function resetpasswordController(req, res) {
    try {
        let { otp, password, confirmpassword,email} = req.body;

        let user=await FooduserModel.findOne(email);
        let currTime=Date.now();


        if(currTime>user.otpExpiry){
            user.otp=undefined;
            user.otpExpiry=undefined;
            await user.save();
            res.json({
                message:"Otp Expired"
            })
        }
        else{
            if(user.otp!=otp){
                res.json({
                    message:"otp not match"
                });
            }
        else {
            let user = await FooduserModel.findOneAndUpdate(
            { otp,email },
            { password, confirmpassword},
            { runValidators: true, new: true }
        );
        //clearing otp
        user.otp=undefined;
        user.otpExpiry=undefined;
        await user.save();

        console.log(user);
        res.json({
            data:user,
            message: "Password is reset",
        });
    }
    }
    } catch (err) {
        res.send(err.message);
    }
}


/////addnlfxn
//otp generator
function otpgenerator() {
    return Math.floor(100000 + Math.random() * 900000);
}

//protected route function
function protecteRoute(req, res, next) {
    try {
        const cookies = req.cookies;
        const JWT = cookies.JWT;
        if (cookies.JWT) {
            let token = jwt.verify(JWT, secrets.JWTSECRET);

            //adding uid information to req
            req.uid = token.id;
            next();
        } else {
            res.send("Pleas login again");
        }
    } catch (err) {
        if (err.message == "invalid token") {
            res.end("Invalid Token.Login again");
        } else {
            res.end(err.message);
        }
    }
}

//mail sender
async function mail(user) {

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

module.exports={
    signupController,
    loginController,
    forgotpasswordController,
    resetpasswordController,
    protecteRoute
}