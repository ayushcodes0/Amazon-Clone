const userModel = require("../../models/userModel");

const userDetailsController = async (req,res)=>{
    try {
        const user = await userModel.findOne({email: req.user.email})
        res.status(200).json({
            data: user,
            success: true,
            error: false,
            message: "User Detail"
        })
        console.log("user ", user);
    } catch (err) {
        res.status(400).json({message: err.message, success: false, error: true})
    }
}

module.exports = userDetailsController;