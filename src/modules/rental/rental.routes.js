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

// Define routes

rentalRouter.post("/rentals", creatRental);
rentalRouter.put("/rentals/:id", updateRental);
rentalRouter.delete("/rentals/:id", deleteRental);
rentalRouter.get("/rentals", getAllRental);
rentalRouter.get("/rentals/:id", getRentalById);

export default rentalRouter;
