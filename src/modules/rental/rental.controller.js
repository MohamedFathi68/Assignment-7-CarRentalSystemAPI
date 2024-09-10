import { ObjectId } from "mongodb";
import { car, rental } from "../../database/dbConnection.js";

const creatRental = async (req, res) => {
  try {
    req.body.userId = new ObjectId(req.userId.userId);
    req.body.carId = new ObjectId(req.params.carId);
    req.body.startDate = new Date(req.body.startDate);
    req.body.returnDate = new Date(req.body.returnDate);
    let data = await rental.insertOne(req.body, {
      expires: new Date(req.body.returnDate),
    });
    await car.updateOne(
      { _id: new ObjectId(req.params.carId) },
      { $set: { status: "rented" } }
    );
    res.status(200).json({ message: "Created new rental", data });
  } catch (err) {
    console.error("Error creating rental:", err);
    res
      .status(500)
      .json({ message: "Error creating rental", error: err.message });
  }
};

const updateRental = async (req, res) => {
  req.body.userId = new ObjectId(req.body.userId);
  req.body.carId = new ObjectId(req.body.carId);
  req.body.startDate = new Date(req.body.startDate);
  req.body.returnDate = new Date(req.body.returnDate);
  let data = await rental.updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  await car.updateOne(
    { _id: new ObjectId(req.params.carId) },
    { $set: { status: "rented" } }
  );
  res.status(201).json({ message: "rental updated succesfully", data });
};

const deleteRental = async (req, res) => {
  let data = await rental.deleteOne({ _id: new ObjectId(req.params.id) });
  await car.updateOne(
    { _id: new ObjectId(req.params.carId) },
    { $set: { status: "available" } }
  );
  res.status(200).json({ message: "rental deleted succesfully", data });
};

const getAllRental = async (req, res) => {
  const rentalData = await rental
    .aggregate([
      {
        $lookup: {
          from: "user",
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $lookup: {
          from: "car",
          localField: "carId",
          foreignField: "_id",
          as: "car",
        },
      },
      {
        $project: {
          _id: 1,
          startDate: 1,
          returnDate: 1,
          "user.name": 1,
          "user.email": 1,
          "user.phoneNumber": 1,
          "car.name": 1,
          "car.model": 1,
        },
      },
    ])
    .toArray();
  res.status(200).json({ message: "success", rentalData });
};

const getRentalById = async (req, res) => {
    const rentalData = await rental.aggregate([
      {
        $match: { _id: new ObjectId(req.params.id) }
      },
      {
        $lookup: {
          from: "user",
          localField: "userId",
          foreignField: "_id",
          as: "user"
        }
      },
      {
        $lookup: {
          from: "car",
          localField: "carId",
          foreignField: "_id",
          as: "car"
        }
      },
      {
        $project: {
          _id: 1,
          startDate: 1,
          returnDate: 1,
          "user.name": 1,
          "user.email": 1,
          "user.phoneNumber": 1,
          "car.name": 1,
          "car.model": 1
        }
      }
    ]).toArray();
    res.status(200).json({ message: "success", rentalData });
  };
  
export { creatRental, updateRental, deleteRental, getAllRental, getRentalById };
