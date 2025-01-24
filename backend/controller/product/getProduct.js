const productModel = require("../../models/productModel")

const getProductController = async (req,res)=>{
    try {
        const products = await productModel.find().sort({createdAt: -1});

        res.json({
            data: products,
            message: "All Product",
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

module.exports = getProductController;