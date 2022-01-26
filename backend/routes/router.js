import express from "express";
const router = express.Router();
import {
  login,
  registerUser,
  userPic,
  profileUpload,
  sendUserInfo,
} from "../controllers/user.js";
import {
  registerHostel,
  cpUpload,
  listOfHostels,
  singleHostel,
  userHostel,
  searchHostels,
} from "../controllers/hostel.js";

router.get("/", (req, res) => {
  res.json("This is the backend");
});

router.post("/login", login);
router.post("/registeruser", registerUser);

router.post("/registerhostel", cpUpload, registerHostel);
router.get("/hostel", listOfHostels);
router.post("/singlehostel", singleHostel);
router.post("/userHostel", userHostel);

router.post("/userpic", profileUpload, userPic);

router.post("/searchhostel", searchHostels);

router.post("/api/senduserinfo", sendUserInfo);

export default router;
