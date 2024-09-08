import { Router } from "express";
const rentalRouter = Router();

//import controllers

import {
  creatRental,
  updateRental,
  deleteRental,
  getAllRental,
  getRentalById,
} from "./rental.controller.js";
import { authorized, verifyToken } from "../../middleware/JWT/jwt.middleware.js";
import {isRented} from "../../middleware/checkCar/isRented.middleware.js";

// Define routes

rentalRouter.post("/rentals/:id/:carId", verifyToken , authorized, isRented , creatRental);
rentalRouter.put("/rentals/:id", verifyToken , authorized, isRented , updateRental);
rentalRouter.delete("/rentals/:id", verifyToken , authorized, deleteRental);
rentalRouter.get("/rentals", getAllRental);
rentalRouter.get("/rentals/:id", getRentalById);


//export router

export default rentalRouter;
