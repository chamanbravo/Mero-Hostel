import { v2 } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinary
    const response = await v2.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    //file has been uploaded sucessfully
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove the locally saved temporary file as the upload operation got failed

    return null;
  }
};

export default uploadOnCloudinary;
