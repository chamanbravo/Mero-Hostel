import User from "../model/user-model.js";
import jwt from "jsonwebtoken";

const authmiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "Access Denied" });
  }
  const jwtToken = token.replace("Bearer", "").trim();

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });

    req.user = userData;
    req.token = token;
    req.userId = userData._id;

    next();
  } catch (error) {
    console.log(error);
  }
};

export default authmiddleware;
