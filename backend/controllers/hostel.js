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
    let oldFileName = thumbnail.filename;
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
      let oldFileName = img.filename;
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
  const data = await Hostel.find(
    {},
    {
      id: 1,
      hostelName: 1,
      hostelType: 1,
      hostelPrice: 1,
      city: 1,
      thumbnail: 1,
      stars: 1,
      hostelReviews: 1,
      _id: 0,
    }
  );
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
    const data = await Hostel.findOne(
      { hostedBy: id },
      {
        id: 1,
        hostelName: 1,
        hostelType: 1,
        hostelPrice: 1,
        city: 1,
        thumbnail: 1,
        stars: 1,
        hostelReviews: 1,
        _id: 0,
      }
    );
    res.send({ data });
  } catch (e) {
    res.send({ msg: "something went wrong!" });
  }
};

export const searchHostels = async (req, res) => {
  let { searchLocation } = req.body;
  try {
    const data = await Hostel.find(
      {
        $or: [
          { city: { $regex: searchLocation, $options: "i" } },
          { street: { $regex: searchLocation, $options: "i" } },
          { countryState: { $regex: searchLocation, $options: "i" } },
        ],
      },
      {
        id: 1,
        hostelName: 1,
        hostelType: 1,
        hostelPrice: 1,
        city: 1,
        thumbnail: 1,
        stars: 1,
        hostelReviews: 1,
        _id: 0,
      }
    );
    res.send({ data });
  } catch (e) {
    res.send({ msg: "something went wrong!" });
  }
};

export const getComments = async (req, res) => {
  let { comment, hostelId, commentBy } = req.body;
  await Hostel.updateOne(
    { id: hostelId },
    { $push: { hostelReviews: { comment, commentBy } } }
  );
  res.send({ comment, commentBy });
  try {
  } catch (err) {
    res.send({ msg: "something went wrong!" });
  }
};
