const userModel = require("../../models/userModel");

async function allUsers(req,res){
    try {
        const allUsers = await userModel.find();
        res.json({data: allUsers, success : true, error: false})
    } catch (err) {
        res.status(400).json({message: err.message, success: false, error: true})
    }
}

module.exports = allUsers;