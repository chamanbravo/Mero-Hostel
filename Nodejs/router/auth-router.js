const express = require("express");
const router = express.Router();
const { login, register,user } = require("../controller/auth-controller");
const password = require("../controller/password-controller");
const usermiddleware = require("../middleware/user-middleware");
const resetController = require("../controller/reset-controller");
const tokenController = require("../controller/token-controller");
const validate=require('../middleware/validate-middleware')
const {loginSchema, registerSchema} = require('../validators/auth-validate')


router.route("/user").get(usermiddleware,user)
router.route("/register").post(validate(registerSchema),register);
router.route("/login").post(usermiddleware,validate(loginSchema), login);
router.route("/setPassword").post(usermiddleware, password);
router.route("/reset").post(usermiddleware, resetController);
router.route("/token").post(usermiddleware, tokenController);

module.exports = router;
