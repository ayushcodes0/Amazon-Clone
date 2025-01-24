const uploadProductPermission = require("../../helper/permission");
const productModel = require("../../models/productModel")


async function uploadProductController(req,res){
    try {
        const sessionUser = req.userId;

        const uploadProduct = new productModel(req.body);
        const savedProduct = await uploadProduct.save();
        res.status(201).json({
            message: "Product Uploaded Successfully",
            error: false,
            success: true,
            data: savedProduct
        })
    } catch (err) {
        res.status(500).json({
            message: err.message || err, 
            error: true,
            success: false
        })
    }
}

module.exports = uploadProductController