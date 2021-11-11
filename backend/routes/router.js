import express from "express";
const router = express.Router();
import User from "../models/User.js";

router.get("/", (req, res) => {
  res.send("<h1>This is the backend</h1>");
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ user });
        console.log("logged in");
      } else {
        res.send({ msg: "username/password is wrong" });
        console.log("username/password is wrong");
      }
    } else {
      res.send({ msg: "user not registered" });
      console.log("user not registered");
    }
  });
});

router.post("/registeruser", (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  User.findOne({ email }, (error, user) => {
    if (user) {
      res.send({ msg: "email already in use" });
    } else {
      const newUser = new User({ firstname, lastname, email, password });
      newUser
        .save()
        .then((addedUser) => {
          console.log(addedUser);
        })
        .catch((err) => {
          console.log(err);
        });

      res.send({ firstname: firstname });
    }
  });
});

export default router;
