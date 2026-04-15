const express = require("express");
const protect = require("../middleware/authMiddleware");
const authRouter = express.Router();
const {
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/authController");

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);

// protected root
authRouter.get("/profile", protect, getProfile);

module.exports = authRouter;
