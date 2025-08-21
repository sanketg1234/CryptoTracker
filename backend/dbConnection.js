const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGO_URI;

function dbConnection() {
  mongoose
    .connect(uri)
    .then((response) => {
      console.log("DB CONNECT SUCCESS");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = dbConnection;
