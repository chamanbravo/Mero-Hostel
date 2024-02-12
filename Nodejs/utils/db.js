const mongoose = require("mongoose");
require("dotenv").config();
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

module.exports = connectDb;
