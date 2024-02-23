import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const URL = process.env.MONGODB_URL;

const connectDb = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Database connection successful");
  } catch (error) {
    console.log("Database connection failed");
    process.exit(0);
  }
};

export default connectDb;
