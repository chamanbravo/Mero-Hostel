import express from "express";

import {
  hostelDetailsController,
  showHostelDetails,
  showHostelOne,
  updateHostel,
  hostelDelete,
  searchDetails,
} from "../controller/hostelDetails-controller.js";

import bookController from "../controller/book-controller.js";
import validate from "../middleware/validate-middleware.js";
import hostelSchema from "../validators/hostel-validate.js";
import upload from "../middleware/multer-middleware.js";

const router = express.Router();

router
  .route("/register")
  .post(
    upload.single("image"),
    validate(hostelSchema),
    hostelDetailsController
  );
router.route("/show").get(showHostelDetails);
router.route("/show/:id").get(showHostelOne);
router.route("/search").get(searchDetails);
router.route("/update/:id").patch(updateHostel);
router.route("/delete/:id").delete(hostelDelete);
router.route("/book").post(bookController);

export default router;
