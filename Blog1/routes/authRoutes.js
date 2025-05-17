const express = require("express");
const router = express.Router();
const passport = require("passport");
const authController = require("../controller/authController");

router.get("/signup", (req, res) => res.render("signup"));
router.post("/signup", authController.signup);

router.get("/login", (req, res) => res.render("login"));
router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login"
}));

router.get("/logout", authController.logout);

module.exports = router;
