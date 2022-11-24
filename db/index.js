const mongoose = require("mongoose");

const connectionString = "mongodb://addissoft-mongo-1:27017/addis-soft";
// const connectionString = "mongodb://127.0.0.1:27017/addis-soft";

mongoose.connect(connectionString, { useNewUrlParser: true }).catch((e) => {
  console.error("Connection error", e.message);
});

const db = mongoose.connection;

module.exports = db;
