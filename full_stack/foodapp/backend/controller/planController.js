const FoodplanModel=require("../model/planModel");

async function getAllplansController(req,res){
try{
    let plans=await FoodplanModel.find();
    res.status(200).json({
        Allplans:plans
    });
} catch (err) {
    res.status(500).json({
        error:err.message
    });
}

}
async function createPlanController(req,res){
    try {
        console.log(req.body);
        let planObjData=req.body;
        if(Object.keys(planObjData).length>0){
            let newPlan=await FoodplanModel.create(planObjData);
            res.status(201).json({
                result:"Plan created",
                plan:newPlan
            });
        }else{
            res.status(404).json({
                message:"Data Incomplete"
            });
        }

    } catch (err) {
        res.status(500).json({
            error:err.message
        });
    }
}
async function updatePlanController(req,res){
    try {
        console.log(req.body);
        let planUpdateObjData=req.body;
        let id=req.params.id;
        if(Object.keys(planUpdateObjData).length>0){
            const updatedPlan=await FoodplanModel.findByIdAndUpdate(id,planUpdateObjData,{
                runValidators:true,
                new:true
            });
            res.status(200).json({
                plan:updatedPlan
            });
        }else{
            res.status(404).json({
                message:"Nothing to update"
            });
        }

    } catch (err) {
        res.status(500).json({
            error:err.message
        });
    }
}
async function deletePlanRoute(req,res){
    try{
        let id=req.params.id;
        let plan=await FoodplanModel.findByIdAndDelete({_id:id});
        res.status(200).json({
            result:"plan deleted",
        });
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}
async function getplanController(req,res){
    try{
        let id=req.params.id;
        let plan=await FoodplanModel.findById({_id:id});
        res.status(200).json({
            result:"plan found",
            plan:plan});
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}
module.exports={
    getAllplansController,
    createPlanController,
    updatePlanController,
    deletePlanRoute,
    getplanController
}