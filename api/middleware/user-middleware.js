import User from "../model/user-model.js";

const usermiddleware = async (req, res, next) => {
  try {
    const { email } = req.body;
    const userExist = await User.findOne({ email: email });
    if (!userExist) {
      return res.status(400).json({ message: "User does not exist" });
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default usermiddleware;
