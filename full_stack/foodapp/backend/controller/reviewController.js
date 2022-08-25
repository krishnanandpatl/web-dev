const reviewModel=require("../model/reviewModel");
const planModel=require("../model/planModel");

async function createReviewController(req,res){
    try{
        let reviewdata=req.body;
       let review= await reviewModel.create(reviewdata);
     
       let rating=review.rating;
       let reviewId=review["_id"];

       let currentPlan=await planModel.findById(review.plan);
       
       //average rating
       let totalNoofRating=currentPlan.reviews.length;
       let prevAvg=currentPlan.averageRating;
       if(prevAvg){
        let totalRating=parseInt(prevAvg)*totalNoofRating;
        let newAvg=(totalRating+rating)/(totalNoofRating+1);
        currentPlan.averageRating=newAvg;
       
       }else{
        currentPlan.averageRating=rating;
        
       }
       currentPlan.reviews.push(reviewId);
       await currentPlan.save();
       

       res.status(201).json({
        review:review
       })
    }catch(err){
        res.status(500).json({
            message:"Internal server Error"
        })
    }
}
async function getAllReviewController(req,res){
    try{
        //let reviewData=req.body;
        let reviews=await reviewModel.find()
        .populate({path:"user",select:"name pic"})
        .populate({path:"plan",select:"price name"}); //population brings out the id data
        res.status(200).json({
            reviews:reviews
        })
    }catch(err){
        res.status(500).json({
            message:res.message
        })
    }
}
module.exports={
    createReviewController,
    getAllReviewController
}