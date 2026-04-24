const jwt = require("jsonwebtoken");
const user = require("../models/User");

const protect = async (req, res, next) => {
  let token = req.cookies.token;

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    // verify token
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await user.findById(decode.id).select("-password");
    next();
  } catch (error) {
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};

const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(401).json({ message: "Not authorized as an admin" });
  }
};
module.exports = { protect, admin };
