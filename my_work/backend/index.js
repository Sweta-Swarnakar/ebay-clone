const express = require("express");


const brandController = require("./controllers/brand.controller");
const priceController = require("./controllers/price.controller");
const productController = require("./controllers/product.controller");
const productCategoryController = require("./controllers/productCategory.controller")
const productSubCategoryController = require("./controllers/productSubcategory.controller");

const app = express();
app.use(express.json()); //for parsing json data

app.use(express.urlencoded({ extended: true })); // for parsing body data in post requests

// public
app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");


//mention routes here
app.use("/brands", brandController);
app.use("/prices", priceController);
app.use("/products", productController);
app.use("/productCategories", productCategoryController);
app.use("/productSubCategories", productSubCategoryController);

app.get("/", function (req, res) {
    res.render("landingPage.ejs", {});
  });


 module.exports = app;