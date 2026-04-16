const { getAdminDashboard } = require("../controllers/adminController");
const { protect, admin } = require("../middleware/authMiddleware");
const express = require("express");
const adminRouter = express.Router();

adminRouter.get("/dashboard", protect, admin, getAdminDashboard);

module.exports = adminRouter;
