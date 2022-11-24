const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employee = new Schema(
  {
    name: { type: String, required: true },
    birthDate: { type: Date, required: true },
    gender: { type: String, required: true },
    salary: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("employee", employee);
