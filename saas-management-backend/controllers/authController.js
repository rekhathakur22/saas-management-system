const user = require("../models/User");
const bcrypt = require("bcryptjs");

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

module.exports = registerUser;
