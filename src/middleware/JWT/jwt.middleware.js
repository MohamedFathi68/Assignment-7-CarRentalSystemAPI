import jwt from "jsonwebtoken";

export const generateToken = async (req, res, next) => {
  let userId = req._user._id;  
  const token = jwt.sign({ userId: userId.toString() }, "hambozo", {
    expiresIn: "1d"
  });
  req.token = token;
  next();
};

export const verifyToken = async (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    return res.status(401).json({ message: "Token not provided" });
  }else{
    jwt.verify(token, "hambozo", (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Invalid token" });
      } else {
        req.userId = decoded;
        next();
      }
    });
  }
}

export const authorized = (req, res, next) => {  
  if (req.userId.userId === req.params.id) {
    next();
  } else {
    return res.status(401).json({ message: "You are not authorized" });
  }
}
