import mongoose from "mongoose";

const Hostel = mongoose.model(
  "Hostel",
  new mongoose.Schema({
    hostelName: {
      type: String,
      required: true,
    },
    hostelOwnerName: {
      type: String,
      required: true,
    },
    hostelContactNumber: {
      type: String,
      required: true,
    },
    hostelOwnerNumber: {
      type: String,
      required: true,
    },
    hostelType: {
      type: String,
      required: true,
    },
    nehaRegister: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    hostelCapacity: {
      type: String,
      required: true,
    },
    hostelRooms: {
      type: String,
      required: true,
    },
    hostelPrice: {
      type: String,
      required: true,
    },
    hostelAdmissionFee: {
      type: String,
      required: true,
    },
    hostelSecurityCharges: {
      type: String,
      required: true,
    },
    amenities: {
      type: Array,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    gallery: {
      type: Array,
      required: true,
    },
  })
);

export default Hostel;
