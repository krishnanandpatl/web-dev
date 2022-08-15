const express = require("express");
const userRouter=express.Router();
const {userController,getusersController, updateProfileController,deleteUserController}=require("../controller/userController");
const {protecteRoute}=require("../controller/authController");
//
userRouter.get("/users", protecteRoute, getusersController);

//profile data
userRouter.get("/user", protecteRoute, userController);

userRouter.patch("/update", protecteRoute, updateProfileController);

userRouter.patch("/delete", protecteRoute, deleteUserController);

module.exports=userRouter;