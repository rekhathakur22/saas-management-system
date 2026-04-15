const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const dotenv = require("dotenv");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
