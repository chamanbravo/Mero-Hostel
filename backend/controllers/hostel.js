import Hostel from "../models/Hostel.js";
import fs from "fs";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";

const upload = multer({
  dest: "./public/hostels",
});

export const cpUpload = upload.fields([
  { name: "thumbnail", maxCount: 1 },
  { name: "gallery", maxCount: 4 },
]);

export const registerHostel = async (req, res, next) => {
  try {
    const {
      hostelName,
      hostelOwnerName,
      hostelOwnerNumber,
      hostelContactNumber,
      hostelType,
      nehaRegister,
      street,
      city,
      countryState,
      hostelCapacity,
      hostelRooms,
      hostelPrice,
      hostelAdmissionFee,
      hostelSecurityCharges,
      amenities,
      locationDesc,
      hostelRules,
      userId,
    } = req.body;

    let thumbnailName,
      galleryArray = [];
    const thumbnail = req.files["thumbnail"][0];
    let oldFileName = thumbnail.filename.split(" ").join("");
    let fileType = thumbnail.mimetype.split("/")[1];
    let newFileName =
      Date.now() +
      "_" +
      req.body.hostelName +
      "_" +
      Math.floor(Math.random() * 1000) +
      "." +
      fileType;
    thumbnailName = newFileName;
    fs.rename(
      `./public/hostels/${oldFileName}`,
      `./public/hostels/${newFileName}`,
      () => {}
    );

    const gallery = req.files["gallery"];
    for (let img of gallery) {
      let oldFileName = img.filename.split(" ").join("");
      let fileType = img.mimetype.split("/")[1];
      let newFileName =
        Date.now() +
        "_" +
        req.body.hostelName +
        "_" +
        Math.floor(Math.random() * 1000) +
        "." +
        fileType;
      galleryArray.push(newFileName);
      fs.rename(
        `./public/hostels/${oldFileName}`,
        `./public/hostels/${newFileName}`,
        () => {}
      );
    }
    const newHostel = await new Hostel({
      id: uuidv4(),
      hostelName,
      hostelOwnerName,
      hostelOwnerNumber,
      hostelContactNumber,
      hostelType,
      nehaRegister,
      street,
      city,
      countryState,
      hostelCapacity,
      hostelRooms,
      hostelPrice,
      hostelAdmissionFee,
      hostelSecurityCharges,
      amenities,
      thumbnail: thumbnailName,
      gallery: galleryArray,
      locationDesc,
      hostelRules,
      hostedBy: userId,
    });
    newHostel.save().then(res.send({ msg: "Hostel successfully hosted" }));
  } catch (err) {
    res.send({ msg: "Something went wrong" });
    console.log(err);
  }
};

export const listOfHostels = async (req, res) => {
  const data = await Hostel.find({});
  try {
    res.send({ data });
  } catch (err) {
    res.send({ msg: "something went wrong" });
  }
};

export const singleHostel = async (req, res) => {
  let { hostelId } = req.body;
  try {
    const data = await Hostel.findOne({
      id: hostelId,
    });
    res.send({ data });
  } catch (err) {
    res.send({ msg: "Something went wrong!" });
  }
};

export const userHostel = async (req, res) => {
  let { id } = req.body;
  try {
    const data = await Hostel.findOne({ hostedBy: id });
    res.send({ data });
  } catch (e) {
    res.send({ msg: "something went wrong!" });
  }
};
