import express from "express";
import updateController from "../controller/update-controller.js";
import authmiddleware from "../middleware/auth-middleware.js";
const router = express.Router();

router.route("/update").patch(authmiddleware, updateController);

export default router;
