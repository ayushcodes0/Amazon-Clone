const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    productId: {
        ref: 'product',
        type: String
    },
    quantity: Number,
    userId: String,

},{timestamps: true});


const cartProductModel = mongoose.model("cartProduct",cartSchema);

module.exports = cartProductModel;