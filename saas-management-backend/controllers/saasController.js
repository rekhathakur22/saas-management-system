const saasModel = require("../models/Saas");

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

module.exports = createSaas;
