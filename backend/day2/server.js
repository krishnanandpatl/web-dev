const express=require("express");
const app=express();
app.use(express.json());
app.post("/simple",function(req,res,next){
    let data=req.body;
    let length=Object.keys(data).length;
    if(length==0){
        res.end("Please enter some data");
    }
    else{
        next();
    }
})
app.post("/simple",function(req,res){
    console.log("data",req.body);
    res.end("simple output");
})
app.listen(3000,function(){
    console.log("Server started at 3000");
})