const express = require("express");
const reviewRouter=express.Router();

const {createReviewController,
    getAllReviewController} = require ('../controller/reviewController');

reviewRouter.route("/")
.get(getAllReviewController)
.post(createReviewController);

module.exports=reviewRouter;