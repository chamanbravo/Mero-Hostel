import mongoose from "mongoose";

const hostelSchema = new mongoose.Schema({
  hostelName: {
    type: String,
    required: true,
  },
  hostelLocation: {
    type: String,
    required: true,
  },
  hostelPrice: {
    type: Number,
    required: true,
  },
  hostelDescription: {
    type: String,
    required: true,
  },
  hostelImage: {
    type: String,
  },
  hostelRating: {
    type: Number,
    required: true,
  },
  hostelContact: {
    type: String,
    required: true,
  },
});

const Hostel = new mongoose.model("Hostel", hostelSchema);

export default Hostel;
