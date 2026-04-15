const user = require("../models/User");
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
    const { name, email, password } = req.body;
    // check if user already exists
    const userExists = await user.findOne({ email }).select("_id");
    if (userExists) {
      return res.status(400).json({ message: "user already exists" });
    }
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const User = await user.create({
      name,
      email,
      password: hashedPassword,
    });
    res
      .status(201)
      .json({ message: "User registered successfully", name: User.name });
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
    const User = await user.findOne({ email });
    if (User && (await bcrypt.compare(password, User.password))) {
      res.status(200).json({
        message: "User logged in successfully",
        token: generateToken(User._id),
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
  console.log(req);
  res.status(200).json({
    message: "User profile",
    user: req.user,
  });
};

module.exports = { registerUser, loginUser, getProfile };
