const express = require("express");
const router = express.Router();
const updateController = require('../controller/update-controller')
const authmiddleware = require('../middleware/auth-middleware')


router.route('/update').patch(authmiddleware,updateController);


module.exports = router;