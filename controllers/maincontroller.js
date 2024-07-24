const Car = require("../models/types");

const home = async (req, res) => {
  res.render("index.ejs");
};

const New = (req, res) => {
  res.render("cars/new.ejs");
};

const create = async (req, res) => {
  await Car.create(req.body);
  res.redirect("/cars");
};

const index = async (req, res) => {
  const allCars = await Car.find();
  res.render("cars/indexforcar.ejs", {
    Cars: allCars,
  });
};
const show = async (req, res) => {
  const carId = req.params.carsId;
  const car = await Car.findById(carId);
  res.render("cars/show.ejs", { car });
};

const Delete = async (req, res) => {
  const carId = req.params.carsId;
  await Car.findByIdAndDelete(carId);
  res.redirect("/cars");
};

const edit = async (req, res) => {
  const carId = req.params.carsId;
  const car = await Car.findById(carId);
  res.render("cars/edit.ejs", { car });
};

const update = async (req, res) => {
  const carId = req.params.carsId;
  await Car.findByIdAndUpdate(carId, req.body);
  res.redirect(`/cars/${carId}`);
};

module.exports = {
  home,
  New,
  create,
  index,
  show,
  Delete,
  edit,
  update,
};
