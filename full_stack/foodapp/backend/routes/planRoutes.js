const express = require("express");
const planRouter=express.Router();

const {getAllplansController,createPlanController
    ,updatePlanController,deletePlanRoute,
    getplanController} = require ('../controller/planController');

planRouter.route("/")
.get(getAllplansController)
.post(createPlanController);
planRouter.route("/:id").patch(updatePlanController)
.delete(deletePlanRoute).get(getplanController);


module.exports=planRouter;