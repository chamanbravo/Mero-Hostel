import { Router } from "express";
import {
  login,
  registerUser,
  userPic,
  profileUpload,
  sendUserInfo,
} from "../controllers/user";
import {
  registerHostel,
  cpUpload,
  listOfHostels,
  singleHostel,
  userHostel,
  searchHostels,
  getComments,
  removeComment,
  removeHostel,
} from "../controllers/hostel";

const router: Router = Router();

router.post("/login", login);
router.post("/registeruser", registerUser);
router.post("/userpic", profileUpload, userPic);
router.post("/api/senduserinfo", sendUserInfo);

router.post("/registerhostel", cpUpload, registerHostel);
router.get("/hostel", listOfHostels);
router.post("/singlehostel", singleHostel);
router.post("/userHostel", userHostel);

router.post("/searchhostel", searchHostels);

router.post("/getcomments", getComments);
router.post("/removeComment", removeComment);
router.post("/removeHostel", removeHostel);

export default router;
