import bcrypt from "bcrypt";
import User from "../models/User.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.send({ msg: "Invalid Credentials" });
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    isPasswordCorrect
      ? res.send({ user })
      : res.send({ msg: "Invalid Credentials" });
  } catch (err) {
    console.log(err);
    res.send({ msg: "Something went wrong!" });
  }
};

export const registerUser = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const hashedPassword = await bcrypt.hashSync(password, 10);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) return res.send({ msg: "Email already in use" });
    const newUser = await new User({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });
    newUser.save().then(res.send({ firstname: newUser.firstname }));
  } catch (err) {
    res.send({ msg: "Something went wrong!" });
  }
};
