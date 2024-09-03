import { Router } from "express";
import userRouter from "./user/user.routes.js";
import carRouter from "./car/car.routes.js";
import rentalRouter from "./rental/rental.routes.js";
const bootstrap = Router();

bootstrap.use("/v1", userRouter);
bootstrap.use("/v1", carRouter);
bootstrap.use("/v1", rentalRouter);

export default bootstrap;
