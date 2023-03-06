import mongoose from "mongoose";

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    doj: {
      type: Date,
      default: new Date(),
    },
    profilePic: {
      type: String,
      default: "",
    },
  })
);

export default User;
