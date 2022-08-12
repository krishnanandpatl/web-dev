const FooduserModel = require("../model/usermodel");
async function getusersController(req, res) {
    try {
        let users = await FooduserModel.find();
        res.json(users);
    } catch (err) {
        res.end(err.message);
    }
}

async function userController(req, res) {
    try {
        const uid = req.uid;
        let user = await FooduserModel.findById(uid);
        res.json(user);
    } catch (err) {
        console.log(err);
        res.end(err.message);
    }
}

async function updateProfileController(req,res){
    try{
        let {email,password}=req.body;
        let user=await FooduserModel.findOne({email,password});

    }catch(err){
        res.end(err.message);
    }
}

async function deleteUserController(req,res){
    try{
         let {email,password}=req.body;
         await FooduserModel.findOneAndDelete({email,password});
         res.end("User Deleted");
    }catch(err){
        res.end(err.message);
    }
}

module.exports={
    getusersController,
    userController,
    updateProfileController,
    deleteUserController
}