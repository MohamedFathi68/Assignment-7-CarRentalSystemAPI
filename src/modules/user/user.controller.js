import { ObjectId } from "mongodb";
import { user } from "../../database/dbConnection.js";

const userRegister = async (req, res) => {
  let data = await user.insertOne(req.body)
  res.status(201).json({ message: "Account created succesfully" , data});
};

const userLogin = (req, res) => {
  let token = req.token
  res.status(202).json({ message: "Logedin succesfully, Welcome" , token});
};

const getUserById = async (req, res) => {
  let _user = await user.findOne({_id:  new ObjectId(req.params.id)}, {projection: {password: 0}});
  res.status(200).json({ message: "success" , _user });
};

const getAllUsers = async (req, res) => {
  let users = await user.find({}, {projection: {password: 0}}).toArray();
  res.status(200).json({ message: "success", users });
};

const updateUser = async (req, res) => {
  let data = await user.updateOne({_id:  new ObjectId(req.params.id)}, {$set: req.body});
  res.status(200).json({ message: "success" , data});
};
const deleteUser = async (req, res) => {
  let data = await user.deleteOne({_id:  new ObjectId(req.params.id)});
  res.status(200).json({ message: "success" , data });
};

export {
  userRegister,
  userLogin,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
};
