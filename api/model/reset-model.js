import mongoose from "mongoose";

const resetSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  resetToken: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: Date,
    expires: 300,
    required: true,
  },
});

const Reset = new mongoose.model("Reset", resetSchema);

export default Reset;
