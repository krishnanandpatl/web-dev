const mongoose=require("mongoose");

let dblink="mongodb+srv://krishna:tZ5wUh7Q4UWJzADJ@cluster1.uwvshfn.mongodb.net/?retryWrites=true&w=majority";

//app connection to database
mongoose.connect(dblink).then(function(){
    console.log("connected");
}).catch(function(err){
    console.log("error=",err);
})

//schema creation-- only entries written will be added to your db no one else
let userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is missing"]
    }, 
    password:{
        type:String,
        required:[true,"Enter the password"]
    },
    confirmpassword:{
        type:String,
        required:[true,"Enter the password again"],
        validate:{
            validator:function(){
                return this.password==this.confirmpassword;

           },
            message:"Password mismatch"
        }
    },
    email:{
        type:String,
        required:[true,"Email is missing"],
        unique:[true,"Email already exists"]
    },
    phonenumber:{
        type:"String",
        minLength:[10,"Minimum length is 10"],
        maxLength:[10,"Maximum length is 10"]
    },
    otp: {
        type: "String"
    },
    otpExpiry:{
        type:Date
    },
    pic:{
        type:String,
        default:"aa.jpg"
    },
    address:{
        type:String
    }
})

//model
const FooduserModel=mongoose.model('FooduserModel',userSchema);
module.exports=FooduserModel;