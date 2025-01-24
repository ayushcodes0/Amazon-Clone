const cartProductModel = require("../../models/cartProductModel");
const userModel = require("../../models/userModel");
const addToCartController = async(req,res)=>{
    try {
        const {productId} = req?.body;
        const userEmail = req.user?.email;
        const user = await userModel.findOne({email: userEmail});
        const currentUser = user._id;

        const isProductAvailable = await cartProductModel.findOne({productId: productId })

        if(isProductAvailable){
            res.json({
                message: "Product Already Exist",
                error: true,
                success: false
            })
        }

        else{

            const payload = {
                productId: productId,
                quantity:  1,
                userId: currentUser
            }
    
            const newItem = await cartProductModel(payload);
            const savedProduct = await newItem.save();
    
            res.json({
                data: savedProduct,
                message: "Product Added In Cart",
                success: true,
                error: false
            })
        }


    } catch (err) {
        res.json({
            message : err.message,
            error: true,
            success: false
        })
    }
}

module.exports = addToCartController