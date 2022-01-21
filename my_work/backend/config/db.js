require('dotenv').config()
const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(process.env.DB_URI)
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    }).catch((err) =>{
      console.log(err)
    });
};



