import { Router } from "express";
const carRouter = Router();
import {
  addCar,
  getCarById,
  getAllCars,
  updateCar,
  deleteCar,
} from "./car.controller.js";

carRouter.post("/car", addCar);
carRouter.get("/car/:id", getCarById);
carRouter.get("/car", getAllCars);
carRouter.put("/car/:id", updateCar);
carRouter.delete("/car/:id", deleteCar);

export default carRouter;
