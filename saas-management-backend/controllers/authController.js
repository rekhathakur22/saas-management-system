const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// 🔥 Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// register user

const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    // check if user already exists
    const userExists = await User.findOne({ email }).select("_id");
    if (userExists) {
      return res.status(400).json({ message: "user already exists" });
    }
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    res
      .status(201)
      .json({ message: "User registered successfully", name: newUser.name });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error registering user", error: error.message });
  }
};

// login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = await User.findOne({ email });
    if (newUser && (await bcrypt.compare(password, newUser.password))) {
      res.cookie("token", generateToken(newUser._id), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });
      res.status(200).json({
        message: "User logged in successfully",
        role: newUser.role,
      });
    } else {
      res.status(400).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error logging in user", error: error.message });
  }
};

// get user profile
const getProfile = (req, res) => {
  res.status(200).json({
    message: "User profile",
    user: req.user,
  });
};

module.exports = { registerUser, loginUser, getProfile };
