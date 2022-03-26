import mongoose from 'mongoose'

const Hostel = mongoose.model(
  'Hostel',
  new mongoose.Schema({
    id: {
      type: String,
      required: true,
    },
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
    countryState: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
    latitude: {
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
    stars: {
      type: Number,
      default: 0,
    },
    hostelReviews: {
      type: Array,
      default: [],
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
    hostedDate: {
      type: Date,
      default: new Date(),
    },
    locationDesc: {
      type: String,
      required: true,
    },
    hostelRules: {
      type: String,
      required: true,
    },
    hostedBy: {
      type: String,
      required: true,
    },
  })
)

export default Hostel
