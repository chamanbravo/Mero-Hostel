import express from "express";
import {
  login,
  register,
  user,
  userHostel,
  userToken,
} from "../controller/auth-controller.js";

import password from "../controller/password-controller.js";
import usermiddleware from "../middleware/user-middleware.js";
import resetController from "../controller/reset-controller.js";
import tokenController from "../controller/token-controller.js";
import validate from "../middleware/validate-middleware.js";
import { loginSchema, registerSchema } from "../validators/auth-validate.js";
import authmiddleware from "../middleware/auth-middleware.js";

const router = express.Router();

router.route("/user").get(usermiddleware, user);
router.route("/register").post(validate(registerSchema), register);
router.route("/login").post(usermiddleware, validate(loginSchema), login);
router.route("/setPassword").post(usermiddleware, password);
router.route("/usertoken").get(authmiddleware, userToken);
router.route("/reset").post(usermiddleware, resetController);
router.route("/token").post(usermiddleware, tokenController);
router.route('/userDetails').get(authmiddleware,userHostel)

export default router;
