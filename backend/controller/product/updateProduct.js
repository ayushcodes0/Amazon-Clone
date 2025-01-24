const productModel = require("../../models/productModel");

const updateProductController = async (req,res)=>{
    try {
        const {_id, ...restBody} = req.body;
        const updateProduct = await productModel.findByIdAndUpdate(_id,restBody);
        res.json({
            data: updateProduct,
            message: "product updated successfully",
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

module.exports = updateProductController;