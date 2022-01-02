import express from "express";
const router = express.Router();
import User from "../models/User.js";
import Hostel from "../models/Hostel.js";
import multer from "multer";
import fs from "fs";
import bcrypt from "bcrypt";

const upload = multer({
  dest: "./public/hostels",
});

router.get("/", (req, res) => {
  res.send("<h1>This is the backend</h1>");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    console.log(user);
    if (user) {
      const isPasswordCorrect = bcrypt.compare(password, user.password);
      if (isPasswordCorrect) {
        res.send({ user });
        console.log("logged in");
      } else {
        res.send({ msg: "Invalid credentials" });
        console.log("Invalid credentials");
      }
    }
  } catch (err) {
    console.log(err);
    res.send({ msg: "Something went wrong!" });
  }
});

router.post("/registeruser", (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  User.findOne({ email }, (error, user) => {
    if (user) {
      res.send({ msg: "email already in use" });
    } else {
      const newUser = new User({
        firstname,
        lastname,
        email,
        password: hashedPassword,
      });
      newUser
        .save()
        .then((addedUser) => {
          console.log(addedUser);
        })
        .catch((err) => {
          console.log(err);
        });

      res.send({ firstname: firstname });
    }
  });
});

const cpUpload = upload.fields([
  { name: "thumbnail", maxCount: 1 },
  { name: "gallery", maxCount: 4 },
]);

router.post("/registerhostel", cpUpload, function (req, res, next) {
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
  fs.rename(
    `./public/hostels/${oldFileName}`,
    `./public/hostels/${newFileName}`,
    function () {
      console.log("file renamed");
    }
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
    fs.rename(
      `./public/hostels/${oldFileName}`,
      `./public/hostels/${newFileName}`,
      function () {
        console.log("file renamed");
      }
    );
  }
});

export default router;
