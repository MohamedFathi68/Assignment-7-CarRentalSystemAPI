import { Router } from "express";
const carRouter = Router();
import {
  addCar,
  getCarById,
  getAllCars,
  updateCar,
  deleteCar,
  getCarsByModels, 
  getAvailableCarsByModel, 
  getRentedOrSpecificModelCars, 
  getAvailableOrRentedSpecificModelCars
} from "./car.controller.js";

carRouter.post("/car", addCar);
carRouter.get("/car/:id", getCarById);
carRouter.get("/car", getAllCars);
carRouter.put("/car/:id", updateCar);
carRouter.delete("/car/:id", deleteCar);
//special APIs
carRouter.get('/cars', getCarsByModels);
carRouter.get('/cars/avilable', getAvailableCarsByModel);
carRouter.get('/cars/rented-or-model/:model', getRentedOrSpecificModelCars);
carRouter.get('/cars/available-or-rented', getAvailableOrRentedSpecificModelCars);


export default carRouter;
