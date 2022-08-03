const FooduserModel = require("../model/usermodel");
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
        res.end("data recieved");
    } catch (err) {
        res.end(err.message);
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
                    res.send("User logged In");
                } else {
                    res.send("Password mismatch");
                }
            } else {
                res.send("User not Registered. Kindly signup");
            }
        } else {
            res.end("Enter the Email or Password");
        }
    } catch (err) {
        res.end(err.message);
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

        res.json({
            data: user,
            message: "OTP Sent",
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

module.exports={
    signupController,
    loginController,
    forgotpasswordController,
    resetpasswordController,
    protecteRoute
}