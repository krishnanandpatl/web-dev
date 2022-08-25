const express = require("express");
//represents -- collection
const cookieparser = require("cookie-parser");

const authRouter=require("./routes/authRoutes");
const userRouter=require("./routes/userRoutes");
const planRouter=require("./routes/planRoutes");
const reviewRouter=require('./routes/reviewRoutes')

const app = express();
app.use(express.json());
app.use(cookieparser());

app.use("/api/v1/auth",authRouter);
app.use("/api/v1/user",userRouter);
app.use("/api/v1/plan",planRouter);
app.use("/api/v1/review",reviewRouter);

//update profile
//delete profile

//server starting
app.listen(3000, function () {
    console.log("Server started at 3000");
});