const mongoose=require("mongoose");

const bookingSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        required:[true,"Review must belong to a user"],
        ref:"FooduserModel"
    },
    plan:{
        type:mongoose.Schema.ObjectId,
        required:[true,"Review must belong to a plan"],
        ref:"FoodplanModel"
    },
    bookedAt:{
        type:Date,
        default:Date.now()
    },
    priceAtThatTime:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:["pending","failed","success"],
        required:true,
        default:"pending"
    }
})

const BookingModel=mongoose.model("FoodbookingModel",bookingSchema);
module.exports=BookingModel;