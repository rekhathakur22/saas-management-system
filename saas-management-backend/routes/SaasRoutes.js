const express = require("express");
const saasRouter = express.Router();
const { protect, admin } = require("../middleware/authMiddleware");
const createSaas = require("../controllers/saasController");

// 🔥 Only admin can create SaaS
saasRouter.post("/create", protect, admin, createSaas);

module.exports = saasRouter;
