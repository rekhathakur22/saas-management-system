const express = require("express");
const userRouter = express.Router();
const {
  assignSaasToUser,
  getUserWithSaas,
} = require("../controllers/userController");
const { protect, admin } = require("../middleware/authMiddleware");

userRouter.post("/assign-saas", protect, admin, assignSaasToUser);
userRouter.get("/:id", protect, admin, getUserWithSaas);
module.exports = userRouter;
