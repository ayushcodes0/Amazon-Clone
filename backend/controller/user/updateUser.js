const userModel = require("../../models/userModel");

async function updateUser(req,res){
    try {
        const sessionUser = req.email;
        console.log("checking update user ",sessionUser);
        const {userId, email, name, role} = req.body;
        const payload = {
            ...(email && {email: email}),
            ...(name && {name: name}),
            ...(role && {role: role}),
        }

        const user= await userModel.findOne(sessionUser);

        const updateUser = await userModel.findByIdAndUpdate(userId, payload)
        res.json({
            data: updateUser,
            message: "User Updated",
            error: false,
            success: true
        })
    } catch (err) {
        res.status(400).json({
            message: err.message,
            error: true,
            success: false
        })
    }
}

module.exports = updateUser;