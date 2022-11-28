const path = require("path");
const express = require("express");
const { check, body } = require("express-validator");
const userController = require("../controllers/user-controller");
const router = express.Router();



//POST /signup    -- Sign Up or Register new user
router.post("/signup", userController.postSignup);

//POST /login     -- Login with username & password
router.post("/login", userController.postLogin);

router.post("/Adminlogin", userController.postAdmin);

module.exports = router;
