const express = require("express");
const saasRouter = express.Router();
const { protect, admin } = require("../middleware/authMiddleware");
const {
  createSaas,
  getTotalCost,
  getCostBreakdown,
  getUserSaasUsage,
} = require("../controllers/saasController");

// 🔥 Only admin can create SaaS
saasRouter.post("/create", protect, admin, createSaas);
saasRouter.get("/total-cost", protect, admin, getTotalCost);
saasRouter.get("/cost-breakdown", protect, admin, getCostBreakdown);
saasRouter.get("/user-usage", protect, admin, getUserSaasUsage);

module.exports = saasRouter;
