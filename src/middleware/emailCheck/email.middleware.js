import { user } from "../../database/dbConnection.js";

const checkEmailRegister = async (req, res, next) => {
  user.findOne({ email: req.body.email }).then((result) => {
    if (result) {
      return res.status(409).json({ message: "Email already exists" });
    } else {
      next();
    }
  });
};

const checkEmailLogin = async (req, res, next) => {
  let _user = await user.findOne({ email: req.body.email });
  if (_user) {
    req._user = _user;
    next();
  } else {
    return res
      .status(409)
      .json({ message: "Email doesn't exists, please register first" });
  }
};

export { checkEmailRegister, checkEmailLogin };
