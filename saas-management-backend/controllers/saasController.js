const saasModel = require("../models/Saas");
const userModel = require("../models/User");

// Create a new SaaS subscription
const createSaas = async (req, res) => {
  try {
    const { name, category, cost, billingCycle, renewalDate } = req.body;
    const newSaas = await saasModel.create({
      name,
      category,
      cost,
      billingCycle,
      renewalDate,
      createdBy: req.user._id, // Assuming req.user is set by protect middleware
    });

    res.status(201).json({
      message: "SaaS subscription created successfully",
      saas: newSaas,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating SaaS subscription",
      error: error.message,
    });
  }
};

const getTotalCost = async (req, res) => {
  try {
    const saasList = await saasModel.find();
    let totalCost = 0;
    saasList.forEach((item) => {
      if (item.billingCycle === "monthly") {
        totalCost += item.cost * 12; // Convert monthly cost to annual cost
      } else {
        totalCost += item.cost;
      }
    });

    return res.status(200).json({
      totalCost,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error calculating total cost",
      error: error.message,
    });
  }
};

const getCostBreakdown = async (req, res) => {
  try {
    const saasList = await saasModel.find();
    let monthly = 0;
    let annual = 0;
    let totalYearlyCost = 0;
    let monthlyToolCount = 0;
    let yearlyToolCount = 0;

    saasList.forEach((item) => {
      if (item.billingCycle === "monthly") {
        monthly += item.cost;
        totalYearlyCost += monthly * 12;
        monthlyToolCount++;
      } else {
        annual += item.cost;
        totalYearlyCost += annual;
        yearlyToolCount++;
      }
    });

    return res.status(200).json({
      monthlyCost: monthly,
      annualCost: annual,
      totalYearlyCost,
      monthlyToolCount,
      yearlyToolCount,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error calculating breakdown",
      error: err.message,
    });
  }
};

const getUserSaasUsage = async (req, res) => {
  try {
    const users = await userModel.find();
    const result = users.map((user) => ({
      name: user.name,
      saasCount: user.assignedSaas.length,
    }));

    res.status(200).json({
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error calculating user SaaS usage",
      error: error.message,
    });
  }
};

const getUnusedSaas = async (req, res) => {
  try {
    // get all users
    const users = await userModel.find();

    // get all assigned saas
    let assignedSaasList = [];
    users.forEach((user) => {
      assignedSaasList = [...assignedSaasList, ...user.assignedSaas];
    });

    // get all unused saas
    const unusedSaas = await saasModel.find({
      _id: { $nin: assignedSaasList },
    });

    return res.status(200).json({
      unusedSaas,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error calculating unused SaaS",
      error: error.message,
    });
  }
};

const getRenewalReminders = async (req, res) => {
  try {
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);

    const saasList = await saasModel.find({
      renewalDate: {
        $gte: today,
        $lte: nextWeek,
      },
    });

    return res.status(200).json({
      saasList,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error calculating renewal reminders",
      error: error.message,
    });
  }
};

const getAllSaas = async (req, res) => {
  const allSaas = await saasModel.find();
  res.json(allSaas);
};

module.exports = {
  createSaas,
  getTotalCost,
  getCostBreakdown,
  getUserSaasUsage,
  getUnusedSaas,
  getRenewalReminders,
  getAllSaas,
};
