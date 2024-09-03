import { Router } from "express";
const userRouter = Router();
import {
  userRegister,
  userLogin,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
} from "./user.controller.js";

userRouter.post("/user/register", userRegister);
userRouter.post("/user/login", userLogin);
userRouter.get("/user/:id", getUserById);
userRouter.get("/user", getAllUsers);
userRouter.put("/user/:id", updateUser);
userRouter.delete("/user/:id", deleteUser);

export default userRouter;
