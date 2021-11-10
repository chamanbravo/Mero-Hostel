import express from "express";
const router = express.Router();
import user from "../models/user.js";

router.get("/", (req, res) => {
  res.send("<h1>This is the backend</h1>");
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
});

router.post("/registeruser", (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const newUser = new user({ firstname, lastname, email, password });
  newUser
    .save()
    .then((addedUser) => {
      console.log(addedUser);
    })
    .catch((err) => {
      console.log(err);
    });
});

export default router;
