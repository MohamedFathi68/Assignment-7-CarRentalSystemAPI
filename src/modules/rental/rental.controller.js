import { ObjectId } from "mongodb";
import { car, rental } from "../../database/dbConnection.js";

const creatRental = async (req, res) => {
  req.body.userId = req.userId.userId;
  req.body.carId = req.params.carId;
  req.body.startDate = new Date(req.body.startDate);
  req.body.returnDate = new Date(req.body.returnDate);
  // const timeDifference =
  //   req.body.returnDate.getTime() - req.body.startDate.getTime();
  // const secondDifference =
  //   Math.ceil(timeDifference / (1000 * 3600 * 24)) * 24 * 60 * 60;
  // (async () => {
  //   await rental.createIndex(
  //     { returnDate: 1 },
  //     { expireAfterSeconds: secondDifference }
  //   );
  // })()
  //   .then()
  //   .catch();
  let data = await rental.insertOne(req.body, { expires: new Date(req.body.returnDate)});
  car.updateOne(
    { _id: new ObjectId(req.params.carId) },
    { $set: { status: "rented" } }
  );
  res.status(200).json({ message: "success", data });
};

const updateRental = (req, res) => {
  res.status(200).json({ message: "success" });
};

const deleteRental = (req, res) => {
  res.status(200).json({ message: "success" });
};

const getAllRental = async (req, res) => {
  let rentalData = rental.find().toArray();
    
  res.status(200).json({ message: "success", rentalData });
};

const getRentalById = (req, res) => {
  res.status(200).json({ message: "success" });
};

export { creatRental, updateRental, deleteRental, getAllRental, getRentalById };
