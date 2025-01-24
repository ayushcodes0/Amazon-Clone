const cartProductModel = require("../../models/cartProductModel");
const userModel = require("../../models/userModel");

const deleteAddToCartProduct = async(req,res)=>{
    try {
        const currentUser = req.user?.email;     
        const user = await userModel.findOne({email: currentUser});
        const currentUserId = user._id;
        const addToCartProductId = req.body._id;
        const qty = req.body.quantity;

        const deleteProduct = await cartProductModel.deleteOne({_id: addToCartProductId})

        res.json({
            data: deleteProduct,
            message: "Product Deleted",
            success: true,
            error: false
        })
        
    } catch (err) {
        res.json({
            message: err.message || err,
            success: false,
            error: true
        })
    }
}

module.exports = deleteAddToCartProduct;