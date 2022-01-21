const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

mongoose.connect("mongodb://localhost/authentication");

// mongoose.connect("mongodb://localhost/authentication", () => {
//   console.log("mongodb is connected");
// });
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
  })
);
const routes = require("./routes/routes");

app.use("/users", routes);

app.get("/", (req, res) => {
  res.send("hello message");
});

app.listen(2535, () => {
  console.log("listening on pport 2535");
});
