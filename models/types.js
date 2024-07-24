//Car models

const mongoose = require("mongoose");

const carsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  model: { type: String, required: true },
  image: String,
});

const Car = mongoose.model("Car", carsSchema);
module.exports = Car;
