const cartProductModel = require("../../models/cartProductModel");
const userModel = require("../../models/userModel");

const updateAddToCartProduct = (async(req,res)=>{
    try {
        const currentUser = req.user?.email;     
        const user = await userModel.findOne({email: currentUser});
        const currentUserId = user._id;
        const addToCartProductId = req.body._id;
        const qty = req.body.quantity;

        const updateProduct = await cartProductModel.updateOne({_id: addToCartProductId},{
            ...(qty && {quantity: qty})
        })

        res.json({
            data: updateProduct,
            message: "Product Updated",
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
})

module.exports = updateAddToCartProduct;