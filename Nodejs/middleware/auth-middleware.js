const User = require("../model/user-model");
const jwt = require("jsonwebtoken");
const authmiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(401).json({ message: "Access Denied" });
    }
    const jwtToken = token.replace("Bearer", "").trim();
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    if (!isVerified) {
      return res.status(401).json({ message: "Invalid token" });
    }
    next();
  } catch (error) {
    console.log(error);
  }
};


module.exports = authmiddleware;
