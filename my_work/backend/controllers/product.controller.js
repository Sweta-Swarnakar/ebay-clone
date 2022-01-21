const express = require("express");

const router = express.Router();

const Product = require("../models/product.model");
const { uploadSingle, uploadMultiple } = require("../middleware/upload");

const Brand = require("../models/brand.model");

const Price = require("../models/price.model");


//CREATE product

router.post("/", uploadMultiple(2, "image_urls"), async (req, res) => {
     try{
          let product = await Product.create({
               id: req.body.id,
               title:req.body.title,
               price: req.body.price,
               color:req.body.color,
               description:req.body.description,
               image_urls: req.file.path,
               rating:req.body.rating,
               numOfReview:req.body.numOfReview
          });
          res.status(201).send({ product });
     }catch(err){
          res.status(500).send(err.message)
     }
});


// GET ALL product

router.get("/", async (req, res) => {

     let products = await Product.find().populate("brand_id").lean();

     return res.render('productPage.ejs', {
          products: products,
     });
});


router.get("/all", async (req, res) => {

     let products = await Product.find().populate("brand_id").lean();

     res.status(200).send(products);
});

router.get("/filters", async (req, res) => {

     let brandArray
     let colorArray
     let rangeArray

     if (req.query.brands && req.query.colors && req.query.ranges) {

          brandArray = req.query.brands.split(",")
          colorArray = req.query.colors.split(",")
          rangeArray = req.query.ranges.split(",")

          let brands = await Brand.find({ 'brand_name': { $in: brandArray } }).populate().lean();

          let range_products = await Price.find({ 'price_range': { $in: rangeArray } }).populate().lean();

          let searchArray = []

          for (let i = 0; i < brands.length; i++) {
               searchArray.push(brands[i]._id)
          }

          let searchArray1 = []

          for (let i = 0; i < range_products.length; i++) {
               searchArray1.push(range_products[i]._id)
          }

          let products = await Product.find({ $and: [{ brand_id: { $in: searchArray } }, { color: { $in: colorArray } }, { price_id: { $in: searchArray1 } }] }).populate("brand_id").populate("price_id").lean();

          res.status(200).send(products);

     } else if (req.query.brands && req.query.colors) {
          brandArray = req.query.brands.split(",")
          colorArray = req.query.colors.split(",")

          let brands = await Brand.find({ 'brand_name': { $in: brandArray } }).populate().lean();

          let searchArray = []

          for (let i = 0; i < brands.length; i++) {
               searchArray.push(brands[i]._id)
          }

          let products = await Product.find({ $and: [{ brand_id: { $in: searchArray } }, { color: { $in: colorArray } }] }).populate("brand_id").lean();

          res.status(200).send(products);


     } else if (req.query.brands && req.query.ranges) {

          brandArray = req.query.brands.split(",")
          rangeArray = req.query.ranges.split(",")

          let brands = await Brand.find({ 'brand_name': { $in: brandArray } }).populate().lean();

          let range_products = await Price.find({ 'price_range': { $in: rangeArray } }).populate().lean();

          let searchArray = []

          for (let i = 0; i < brands.length; i++) {
               searchArray.push(brands[i]._id)
          }

          let searchArray1 = []

          for (let i = 0; i < range_products.length; i++) {
               searchArray1.push(range_products[i]._id)
          }

          let products = await Product.find({ $and: [{ brand_id: { $in: searchArray } }, { price_id: { $in: searchArray1 } }] }).populate("brand_id").populate("price_id").lean();

          res.status(200).send(products);


     } else if (req.query.colors && req.query.ranges) {

          colorArray = req.query.colors.split(",")
          rangeArray = req.query.ranges.split(",")

          let range_products = await Price.find({ 'price_range': { $in: rangeArray } }).populate().lean();


          let searchArray1 = []

          for (let i = 0; i < range_products.length; i++) {
               searchArray1.push(range_products[i]._id)
          }

          let products = await Product.find({ $and: [{ color: { $in: colorArray } }, { price_id: { $in: searchArray1 } }] }).populate("brand_id").populate("price_id").lean();

          res.status(200).send(products);

     } else if (req.query.ranges) {

          rangeArray = req.query.ranges.split(",")

          let range_products = await Price.find({ 'price_range': { $in: rangeArray } }).populate().lean();

          let searchArray1 = []

          for (let i = 0; i < range_products.length; i++) {
               searchArray1.push(range_products[i]._id)
          }

          let products = await Product.find({ $and: [{ price_id: { $in: searchArray1 } }] }).populate("brand_id").populate("price_id").lean();

          res.status(200).send(products);

     }else if (req.query.colors) {

          colorArray = req.query.colors.split(",")

          let products = await Product.find({ color: { $in: colorArray } }).lean();

          res.status(200).send(products);

     } else {
          brandArray = req.query.brands.split(",")

          let brands = await Brand.find({ 'brand_name': { $in: brandArray } }).populate().lean();

          let searchArray = []

          for (let i = 0; i < brands.length; i++) {
               searchArray.push(brands[i]._id)
          }

          let products = await Product.find({ brand_id: { $in: searchArray } }).populate("brand_id").lean();

          res.status(200).send(products);
     }


});

//GET product by ID

router.get("/:id", async (req, res) => {

     let product = await Product.findById(req.params.id).populate("brand_id").lean();

     return res.render('individualProduct.ejs', {
          product: product,
     });
});


//GET product by ID



router.get("/:sortBy/sort", async (req, res) => {
     try{
          let id_array = req.query.ids.split(",")

          let products = await Product.find({ _id: { $in: id_array } }).populate("brand_id").sort({ "price": req.params.sortBy }).lean();
        return res.status(200).send(products);
     }catch(err){
        return res.status(500).send(err.message) 
     }
});

//update product by ID

router.patch("/:id", uploadSingle("image_urls"), async (req, res) => {

    try{
     let updatedproduct = await Product.findByIdAndUpdate(req.params.id,{
          id: req.body.id,
          title:req.body.title,
          price: req.body.price,
          color:req.body.color,
          description:req.body.description,
          image_urls: req.file.path,
          rating:req.body.rating,
          numOfReview:req.body.numOfReview
     }, { new: true });
    
    return res.status(200).send({ updatedproduct });
    }catch(err){
     return res.status(500).send(err.message)
    }
    

    

});


//delete product by ID

router.delete("/:id", async (req, res) => {
     try{
          let deletedproduct = await Product.deleteOne({ _id: req.params.id });
          return res.status(200).send({ deletedproduct });
     }catch(err){
        return res.status(500).send(err.message)
     }
});

module.exports = router;