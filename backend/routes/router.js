import express from "express";
const router = express.Router();
import { login, registerUser } from "../controllers/user.js";
import { registerHostel, cpUpload } from "../controllers/Hostel.js";

router.get("/", (req, res) => {
  res.send("<h1>This is the backend</h1>");
});

router.post("/login", login);
router.post("/registeruser", registerUser);

router.post("/registerhostel", cpUpload, registerHostel);

export default router;
