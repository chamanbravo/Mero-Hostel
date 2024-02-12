const mongoose = require("mongoose");

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

module.exports = Reset;
