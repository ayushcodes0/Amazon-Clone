const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const userModel = require("../../models/userModel.js");


async function userSignUpController(req,res){
    const {email , password, name} = req.body;

    try {
        
        const user = await userModel.findOne({email});
        if(user){
            return res.status(409).json({message: "User already Exist", success: false})
        }
        const createdUser = new userModel({name, email, password, role: "General"});
        createdUser.password = await bcrypt.hash(password,10);
        await createdUser.save();
        const jwtToken = jwt.sign({email: email}, process.env.JWT_SECRET, {expiresIn: "24h"});
        res.status(200).json({
            message: "Signup Successfull", 
            success: true,
            jwtToken,
            email,
            name: name
        });


    } catch (err) {
        res.status(500).json({
            message: "Internal server error",
            error: true,
            success: false
        })
    }
}


module.exports = userSignUpController;