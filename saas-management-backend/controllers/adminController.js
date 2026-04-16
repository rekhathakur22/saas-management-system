const getAdminDashboard = (req, res) => {
  res.status(200).json({
    message: "admin dashboard",
    user: req.user,
  });
};

module.exports = { getAdminDashboard };
