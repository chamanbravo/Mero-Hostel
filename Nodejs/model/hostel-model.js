const mongoose = require("mongoose");

const hostelSchema = new mongoose.Schema({
  hostelName: {
    type: String,
    required: true,
  },
  hostelType: {
    type: String,
    required: true,
  },
  hostelLocation: {
    type: String,
    required: true,
  },
  hostelPrice: {
    type: String,
    required: true,
  },
  hostelDescription: {
    type: String,
    required: true,
  },
  hostelImage: {
    type: String,
    required: true,
  },
  hostelRating: {
    type: String,
    required: true,
  },
  hostelContact: {
    type: String,
    required: true,
  },
});

const Hostel = new mongoose.model("Hostel", hostelSchema);
module.exports = Hostel;
