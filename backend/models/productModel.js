const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    productName: {
        type : String,
        required: true
    },
    brandName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    productImage: {
        type: Array,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    sellingPrice: {
        type: Number,
    }
    

},{timestamps: true});


const productModel = mongoose.model("product",productSchema);

module.exports = productModel;