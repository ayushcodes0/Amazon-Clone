const cartProductModel = require("../../models/cartProductModel");
const userModel = require("../../models/userModel");

const viewAddToCart = async(req,res)=>{

    try {
        const currentUser = req.user?.email;     
        const user = await userModel.findOne({email: currentUser});
        const allProduct = await cartProductModel.find({userId: user._id}).populate("productId");
        console.log("allProduct Of a user",allProduct);
        res.json({
            data: allProduct,
            success: true,
            error: false
        })

    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false
        })
    }

}

module.exports =  viewAddToCart;