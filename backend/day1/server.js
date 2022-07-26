//require express
const express=require("express")
//you have to write it --- app signifies-- your server
const app=express();
//json acceptance
app.use(express.json());
//get krna hai data say hello
app.get("/sayhello",function(req,res){
    res.end("hello from server");
})
//get data to say bye
app.get("/bye",function(req,res){
    //frontend
    res.end("bye");
})
//post example
app.post("/sayhello",function(req,res){
    console.log("data",req.body);
    res.end("post wala hello")
})
//recieving data via get
app.get("/getpro/:num1/:num2",function(req,res){
    console.log(req.params.num1);
    console.log(req.params.num2);
    let pro=req.params.num1*req.params.num2;
    res.end(pro+" ");
})
// 3000--address of server --on an given machine
app.listen(3000,function(){
    console.log("server started at 3000");
})