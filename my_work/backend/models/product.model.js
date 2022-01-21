const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(

    {
        product_sub_category_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product_sub_category",
            required: true,
        },
        brand_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "brand",
            required: true,
        },
        price_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "price",
            required: true,
        },
    
        id: {type:String, required:true},
        title:{type:String, required:true},
        price:{type:Number, required:true, maxlength:8},
        color:{type:String, required:false},
        description: {type:String, required:[true,"Please Enter Product Description"]},
        images:[{type:String,require:true} ],
        rating:{type:Number, default:0},
        stock:{type:Number, required:true,maxlength:4},
        numOfReview:{type:Number,default:0},
        
    },
    
        { 
            versionKey: false,
            timestamps: true,
        }

)


// {
//     "id": "8",
//     "title": "Allen Solly Men's Regular Fit Polo",
//     "price": "1999",
//     "color": "Light Green",
//     "description": "Material: Cotton Pattern: Plain half sleeve machine wash",
//     "date": "2021-12-11",
//     "types": {
//       "category": "woollens",
//       "subCategory": "t shirts"
//     },
//     "imageUrl": "https://m.media-amazon.com/images/I/81RcNGzlIhL._UL1500_.jpg",
//     "rating": {
//       "rate": "5.9",
//       "count": "905"
//     }

module.exports = mongoose.model("product",ProductSchema)