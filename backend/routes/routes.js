const express = require("express");
const router = express.Router();
const usersController = require("../controllers/user.controller.js");

//user routes
router.post("/login", usersController.login);
router.post("/createuser", usersController.createUser);

module.exports = router;