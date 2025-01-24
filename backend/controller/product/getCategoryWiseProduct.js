const productModel = require("../../models/productModel")

const getCategoryWiseProduct = async(req,res)=>{
    try {

        const {category} = req?.body || req?.query;
        const product = await productModel.find({category: category})

        res.status(200).json({
            product: product,
            success: true,
            error: false
        })
        
    } catch (err) {
        res.status(400).json({
            message: err.message,
            error: true,
            success: false
        })
    }
}

module.exports = getCategoryWiseProduct;