const FooduserModel = require("../model/usermodel");
//jsonweb token
const secrets=require("../secrets");
const jwt = require("jsonwebtoken");
const mailSender=require("../utility/mailSender");
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
        if (email && password) {
            
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
                    user.password=undefined;
                    user.confirmpassword=undefined;

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
        res.status(500).json({
            result:err.message
        });
    }
}

async function forgotpasswordController(req, res) {
    try {
       
        let { email } = req.body;
        let user=await FooduserModel.findOne({email:email});
        if(user){
            let otp = otpgenerator();
            user.otp=otp;
            let afterFiveMin=Date.now()+5*60*1000;
            otpExpiry=afterFiveMin;
            await user.save();

        await mailSender(user);

        res.status(204).json({
            result: "OTP Sent"
        });
    }else{
        res.status(404).json({
            result:"User not Found"
        });
    }
    } catch (err) {
        res.status(500).json({
            message:err.message
        });
    }
}

async function resetpasswordController(req, res) {
    try {
        let { otp, password, confirmpassword,email} = req.body;

        let user=await FooduserModel.findOne({email:email});
        let currTime=Date.now();


        if(currTime>user.otpExpiry){
            user.otp=undefined;
            user.otpExpiry=undefined;
            await user.save();
            res.status(200).json({
                result:"Otp Expired"
            })
        }
        else{
            if(user.otp!=otp){
                res.status(200).json({
                    result:"otp not match"
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

        
        res.status(201).json({
            data:user,
            result: "Password is reset",
        });
    }
    }
    } catch (err) {
        res.status(500).json({
            result:err.message
        });
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

module.exports={
    signupController,
    loginController,
    forgotpasswordController,
    resetpasswordController,
    protecteRoute
}