import express from "express";
const router = express.Router();
import { login, registerUser } from "../controllers/user.js";
import {
  registerHostel,
  cpUpload,
  listOfHostels,
  singleHostel,
  userHostel,
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

export default router;
