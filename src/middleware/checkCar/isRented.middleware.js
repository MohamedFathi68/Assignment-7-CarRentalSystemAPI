import { ObjectId } from "mongodb";
import { car } from "../../database/dbConnection.js";

const isRented = async (req, res, next) => {
  const carData = await car.findOne({ _id: new ObjectId(req.params.carId || req.body.carId) });  
  if (carData) {
    if (carData.status !== "avilable") {
      return res.status(400).json({ message: "Car is already rented" });
    } else {
      next();
    }
  } else {
    return res.status(404).json({ message: "Car is not existed" });
  }
};




export { isRented };
