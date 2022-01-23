const express = require("express");
var methodOverride = require("method-override");

const userController = require("./controllers/user.controller");

const app = express();

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// NOTE: when using req.body, you must fully parse the request body
//       before you call methodOverride() in your middleware stack,
//       otherwise req.body will not be populated.

app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);

app.set("view engine", "ejs"); // root directory for views views/
app.use(express.static("public"));

app.use("/users", userController);

module.exports = app;
