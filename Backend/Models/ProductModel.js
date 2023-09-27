const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name:{type: String, required: [true,"product name error"]},
        stock: {type:Number, required: [true,"no stock error"], default:0},
        price: {type:Number, required: [true,"no price error"]},
        image: {type:String, required: [true,"img error"]},
    },
    { timestamps: true }
    
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;