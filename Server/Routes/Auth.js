const express = require("express");
const UserModel = require("../Models/UserModel");
const UserRouter = express.Router();
const { query, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

UserRouter.post(
  "/register",
  [query("email").isEmail(), query("password").isLength({ min: 5 })],
  async (req, res) => {
    const result = validationResult(req.body);
    if (result.isEmpty()) {
      let user = await UserModel.findOne({email : req.body.email});
      // console.log(user);
      if (user) {
        return res.status(400).json ("User with email already exits")
      }

      let salt = await bcrypt.genSalt(10);
      HashedPassword = await bcrypt.hash(req.body.password, salt);
      user = await UserModel.create({
        email: req.body.email,
        password: HashedPassword,
      });
      res.send(user);
    } else res.send({ errors: result.array() });
  }
);

UserRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const check = await UserModel.findOne({ email: email });
  if (check) {
    if (check.password === password) {
      res.send("User Authenticate");
    } else {
      res.send("Password doesn't match");
    }
  } else {
    res.send("email cannot found");
  }
});

module.exports = UserRouter;
