import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userGmail: {
    type: String,
    required: true,
  },
  userContact: {
    type: String,
    required: true,
  },
  hostelName: {
    type: String,
    required: true,
  },
  hostelContact: {
    type: String,
    required: true,
  },
  hostelLocation: {
    type: String,
    required: true,
  },
});

const Book = new mongoose.model("Book", bookSchema);

export default Book;

