import bcrypt from "bcrypt";
import User from "../models/User.js";
import multer from "multer";
import fs from "fs";

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
    newUser.save().then(res.send({ newUser }));
  } catch (err) {
    res.send({ msg: "Something went wrong!" });
    console.log(err);
  }
};

const upload = multer({
  dest: "./public/users",
});

export const profileUpload = upload.fields([
  { name: "profilePic", maxCount: 1 },
]);

export const userPic = async (req, res) => {
  try {
    const { userName, id } = req.body;
    const profilePic = req.files["profilePic"][0];
    let oldFileName = profilePic.filename;
    let fileType = profilePic.mimetype.split("/")[1];
    let newFileName =
      Date.now() +
      "_" +
      userName +
      Math.floor(Math.random() * 1000) +
      "." +
      fileType;
    fs.rename(
      `./public/users/${oldFileName}`,
      `./public/users/${newFileName}`,
      () => {}
    );
    await User.updateOne({ _id: id }, { profilePic: newFileName });
    res.send({ msg: newFileName });
  } catch (err) {
    res.send({ msg: "something went wrong!" });
    console.log(err);
  }
};

export const sendUserInfo = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.find(
      { _id: userId },
      { _id: 0, profilePic: 1, firstname: 1, lastname: 1 }
    );
    res.send({ user });
  } catch (err) {
    res.send({ msg: "something went wrong!" });
    console.log(err);
  }
};
