import bcrypt from "bcrypt";

const passwordEncryption = (req, res, next) => {
  req.body.password = bcrypt.hashSync(req.body.password, 8);
  next();
};

const passwordDecryption = (req, res, next) => {
  let { password } = req._user
  if (bcrypt.compareSync(req.body.password, password)) {
    next();
  } else {
    return res.status(401).json({ message: "Invalid password" });
  }
};

export { passwordEncryption, passwordDecryption };
