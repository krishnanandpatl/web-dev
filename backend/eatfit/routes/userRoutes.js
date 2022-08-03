const express = require("express");
const userRouter=express.Router();
const {userController,getusersController, updateProfileController}=require("../controller/userController");
const {protecteRoute}=require("../controller/authController");
//
userRouter.get("/users", protecteRoute, getusersController);

//profile data
userRouter.get("/user", protecteRoute, userController);

userRouter.patch("/update", protecteRoute, updateProfileController);

module.exports=userRouter;