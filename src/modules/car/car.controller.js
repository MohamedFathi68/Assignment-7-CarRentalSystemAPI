import { ObjectId } from "mongodb";
import { car } from "../../database/dbConnection.js";

const addCar = async (req, res) => {
  let data = await car.insertOne(req.body);
  res.status(201).json({ message: "success", data });
};

const getCarById = async (req, res) => {
  let data = await car.findOne({ _id: new ObjectId(req.params.id) });
  res.status(200).json({ message: "success", data });
};

const getAllCars = async (req, res) => {
  let data = await car.find().toArray();
  res.status(200).json({ message: "success", data });
};

const updateCar = async (req, res) => {
  let data = await car.updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  res.status(200).json({ message: "success", data });
};

const deleteCar = async (req, res) => {
  let data = await car.deleteOne({ _id: new ObjectId(req.params.id) });
  res.status(200).json({ message: "success", data });
};

const getCarsByModels = async (req, res) => {
  const { models } = req.query;
  const carData = await car
    .find({ name: { $in: models.split(",") } })
    .toArray();
  res.status(200).json({ message: "success", carData });
};

const getAvailableCarsByModel = async (req, res) => {
  const { model } = req.query;
  const carData = await car
    .aggregate([
      {
        $match: { name: model, status: "avilable" },
      },
    ])
    .toArray();
  res.status(200).json({ message: "success", carData });
};

const getRentedOrSpecificModelCars = async (req, res) => {
  const { model } = req.params;
  const carData = await car
    .aggregate([
      {
        $match: {
          $or: [{ status: "rented" }, { name: model }],
        },
      },
    ])
    .toArray();
  res.status(200).json({ message: "success", carData });
};

const getAvailableOrRentedSpecificModelCars = async (req, res) => {
  const { availableModels, rentedModel } = req.query;
  const carData = await car
    .aggregate([
      {
        $match: {
          $or: [
            { name: { $in: availableModels.split(",") }, status: "avilable" },
            { name: { $in: availableModels.split(",") }, status: "rented" },
          ],
        },
      },
    ])
    .toArray();
  res.status(200).json({ message: "success", carData });
};

export {
  addCar,
  getCarById,
  getAllCars,
  updateCar,
  deleteCar,
  getCarsByModels,
  getAvailableCarsByModel,
  getRentedOrSpecificModelCars,
  getAvailableOrRentedSpecificModelCars,
};
