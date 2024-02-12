const express = require("express");
const router = express.Router();
const {
  hostelDetailsController,
  showHostelDetails,
  showHostelOne,
  updateHostel,
  hostelDelete,searchDetails
} = require("../controller/hostelDetails-controller");
const validate = require('../middleware/validate-middleware')
const hostelSchema = require('../validators/hostel-validate')
const upload = require('../middleware/multer-middleware')

router.route("/register").post(upload.single("image"),validate(hostelSchema),hostelDetailsController);
router.route("/show").get(showHostelDetails);
router.route("/show/:id").get(showHostelOne);
router.route('/search').get(searchDetails);
router.route("/update/:id").patch(updateHostel);
router.route("/delete/:id").delete(hostelDelete);

module.exports = router;
