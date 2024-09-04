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
import { passwordDecryption, passwordEncryption } from "../../middleware/passwordHashing/password.middleware.js";
import { checkEmailLogin, checkEmailRegister } from "../../middleware/emailCheck/email.middleware.js";
import { generateToken } from "../../middleware/JWT/jwt.middleware.js";

userRouter.post("/user/register", checkEmailRegister , passwordEncryption , userRegister);
userRouter.post("/user/login", checkEmailLogin , passwordDecryption, generateToken , userLogin);
userRouter.get("/user/:id", getUserById);
userRouter.get("/user", getAllUsers);
userRouter.put("/user/:id", updateUser);
userRouter.delete("/user/:id", deleteUser);

export default userRouter;
