const mongoose = require("mongoose");

const saasSchema = new mongoose.Schema({
  // Name of the SaaS product (required).
  name: {
    type: String,
    required: true,
  },
  // Type or category of the service (e.g., productivity, finance, etc.).
  category: {
    type: String,
  },
  // Subscription cost of the SaaS product (required).
  cost: {
    type: Number,
    required: true,
  },
  // Billing cycle for the subscription (e.g., monthly, yearly).
  billingCycle: {
    type: String,
    enum: ["monthly", "yearly"],
    default: "monthly",
  },
  //renewalDate: Date when the subscription will renew.
  renewalDate: {
    type: Date,
    required: true,
  },
  // Reference to the User who created/owns this subscription.
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Saas", saasSchema);
