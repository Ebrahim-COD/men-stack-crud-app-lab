require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const app = express();

//Database call
require("./config/database.js");

// MIDDLEWARE
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

//constrollers
const carCtrl = require("./controllers/maincontroller.js");

app.get("/", carCtrl.home);
app.get("/cars/new", carCtrl.New);
app.post("/cars", carCtrl.create);
app.get("/cars", carCtrl.index);
app.get("/cars/:carsId", carCtrl.show);
app.delete("/cars/:carsId", carCtrl.Delete);
app.get("/cars/:carsId/edit", carCtrl.edit);
app.put("/cars/:carsId", carCtrl.update);

app.listen(5000, () => {
  console.log("Listening to port 5000");
});
