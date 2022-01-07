import Hostel from "../models/Hostel.js";
import fs from "fs";
import multer from "multer";

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
      hostelName,
      hostelOwnerName,
      hostelOwnerNumber,
      hostelContactNumber,
      hostelType,
      nehaRegister,
      street,
      city,
      state: countryState,
      hostelCapacity,
      hostelRooms,
      hostelPrice,
      hostelAdmissionFee,
      hostelSecurityCharges,
      amenities,
      thumbnail: thumbnailName,
      gallery: galleryArray,
    });
    newHostel.save().then(res.send({ msg: "Hostel successfully hosted" }));
  } catch (err) {
    res.send({ msg: "Something went wrong" });
    console.log(err);
  }
};
