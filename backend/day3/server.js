const express = require("express");
//represents -- collection
const FooduserModel = require("./usermodel");
const cookieparser = require("cookie-parser");

//jsonweb token
const jwt = require("jsonwebtoken");
const secrets = require("./secrets.js");

const app = express();
app.use(express.json());
app.use(cookieparser());

//for signup
app.post("/signup", async function (req, res) {
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
});

//for login
app.post("/login", async function (req, res) {
    try {
        let data = req.body;
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
});

//for forgot password
app.patch("/forgotpassword", async function (req, res) {
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
});

//for password reset
app.patch("/resetpassword", async function (req, res) {
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
});

//otp generator
function otpgenerator() {
    return Math.floor(100000 + Math.random() * 900000);
}

//
app.get("/users", protecteRoute, async function (req, res) {
    try {
        let users = await FooduserModel.find();
        res.json(users);
    } catch (err) {
        res.end(err.message);
    }
});

//profile data
app.get("/user", protecteRoute, async function (req, res) {
    try {
        const uid = req.uid;
        let user = await FooduserModel.findById(uid);
        res.json(user);
    } catch (err) {
        console.log(err);
        res.end(err.message);
    }
});

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

//server starting
app.listen(3000, function () {
    console.log("Server started at 3000");
});
