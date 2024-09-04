import { user } from "../../database/dbConnection.js";

const userRegister = async (req, res) => {
  let data = await user.insertOne(req.body)
  res.status(201).json({ message: "Account created succesfully" , data});
};

const userLogin = (req, res) => {
  let token = req.token
  res.status(202).json({ message: "Logedin succesfully, Welcome" , token});
};

const getUserById = (req, res) => {
  res.status(200).json({ message: "success" });
};
const getAllUsers = (req, res) => {
  res.status(200).json({ message: "success" });
};
const updateUser = (req, res) => {
  res.status(200).json({ message: "success" });
};
const deleteUser = (req, res) => {
  res.status(200).json({ message: "success" });
};

export {
  userRegister,
  userLogin,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
};
