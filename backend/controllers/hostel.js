import fs from "fs";
import multer from "multer";

const upload = multer({
  dest: "./public/hostels",
});

export const cpUpload = upload.fields([
  { name: "thumbnail", maxCount: 1 },
  { name: "gallery", maxCount: 4 },
]);

export const registerHostel = (req, res, next) => {
  console.log(req.body);
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
    () => {
      console.log("renamed");
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
      () => {
        console.log("renamed");
      }
    );
  }
};
