const userModel = require("../../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")


async function userLoginController(req,res){
    const {email , password} = req.body;

    try {
        
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(403).json({message: "Invalid Credentials",error: true, success: false})
        }
        const checkPassword = await bcrypt.compare(password, user.password);
        if(!checkPassword){
            return res.status(403).json({message: "Invalid Credentials",error: true, success: false})
        }
        const jwtToken = jwt.sign({email: user.email}, process.env.JWT_SECRET, {expiresIn: "24h"});
        res.status(200).json({
            message: "Login Successfull", 
            success: true,
            jwtToken,
            email,
            name: user.name
        });


    } catch (err) {
        res.status(500).json({
            message: "Internal server error",
            error: true,
            success: false
        })
    }
}

module.exports = userLoginController;