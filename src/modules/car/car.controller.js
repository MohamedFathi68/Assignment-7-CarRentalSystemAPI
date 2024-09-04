import { ObjectId } from "mongodb";
import { car } from "../../database/dbConnection.js";

const addCar = async (req, res) => {
  let data = await car.insertOne(req.body);
  res.status(201).json({ message: "success" , data});
};

const getCarById = async (req, res) => {
  let data = await car.findOne({ _id: new ObjectId(req.params.id) });
  res.status(200).json({ message: "success" , data });
};

const getAllCars = async (req, res) => {
  let data = await car.find().toArray();
  res.status(200).json({ message: "success" , data});
};

const updateCar = async (req, res) => {
  let data = await car.updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body });
  res.status(200).json({ message: "success" , data});
};

const deleteCar = async (req, res) => {
  let data = await car.deleteOne({ _id: new ObjectId(req.params.id) });
  res.status(200).json({ message: "success" , data});
};

export { addCar, getCarById, getAllCars, updateCar, deleteCar };
