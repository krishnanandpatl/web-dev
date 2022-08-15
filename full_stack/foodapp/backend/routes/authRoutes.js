const express = require("express");
const authRouter=express.Router();
const {signupController,loginController,forgotpasswordController,resetpasswordController}=require("../controller/authController");
//for signup
authRouter.post("/signup", signupController);

//for login
authRouter.post("/login", loginController);

//for forgot password
authRouter.patch("/forgotpassword", forgotpasswordController);

//for password reset
authRouter.patch("/resetpassword", resetpasswordController);

module.exports=authRouter;