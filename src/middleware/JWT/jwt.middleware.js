import jwt from "jsonwebtoken";

export const generateToken = async (req, res, next) => {
  let userId = req._user._id;  
  const token = jwt.sign({ userId: userId.toString() }, "hambozo", {
    expiresIn: "1d"
  });
  req.token = token;
  next();
};
