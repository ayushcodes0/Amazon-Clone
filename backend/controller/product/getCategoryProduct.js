const productModel = require("../../models/productModel")


const getCategoryProduct = async(req,res)=>{
    try {

        const productCategory = await productModel.distinct("category");  

        const productByCategory = [];
        for(const category of productCategory){
            const product = await productModel.findOne({category: category})
            if(product){
                productByCategory.push(product);
            }
        }

        res.status(200).json({
            message: "category product",
            data: productByCategory,
            success: true,
            error: false,

        })
        
    } catch (err) {
        res.status(400).json({
            message: err.message,
            error: true,
            success: false
        })
    }
}

module.exports = getCategoryProduct;