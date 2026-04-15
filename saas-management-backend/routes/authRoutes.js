const express = require("express");
const authRouter = express.Router();
const registerUser = require("../controllers/authController");

authRouter.post("/register", registerUser);

module.exports = authRouter;
