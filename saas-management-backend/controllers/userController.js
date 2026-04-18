const userModel = require("../models/User");
const saasModel = require("../models/Saas");

const assignSaasToUser = async (req, res) => {
  try {
    const { userId, saasId } = req.body;

    const user = await userModel.findById(userId);
    const saas = await saasModel.findById(saasId);

    if (!user || !saas) {
      return res.status(404).json({
        message: "User or saas not found",
      });
    }

    await user.assignedSaas.push(saasId);
    await user.save();
    return res.status(200).json({
      message: "SaaS assigned to user successfully",
      user,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error assigning SaaS to user",
      error: err.message,
    });
  }
};

const getUserWithSaas = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userModel.findById(userId).populate("assignedSaas");
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "User fetched successfully",
      user,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error fetching user",
      error: err.message,
    });
  }
};

module.exports = { assignSaasToUser, getUserWithSaas };
