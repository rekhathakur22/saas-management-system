import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import SaasList from "./pages/saas/SaasList";
import { AuthProvider } from "./context/auth/AuthProvider";
import ProtectedRoute from "./routes/ProtectedRoute";
import RoleRoute from "./routes/RoleRoute";
import DashboardLayout from "./components/layouts/DashboardLayout";
import UserDashboard from "./pages/dashboard/UserDashboard";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          {/* protected root */}
          <Route element={<ProtectedRoute />}>
            {/* admin Routes */}
            <Route
              path="/admin"
              element={
                <RoleRoute allowedRoles={["admin"]}>
                  <DashboardLayout />
                </RoleRoute>
              }
            >
              <Route index element={<AdminDashboard />} />
              <Route path="saas-list" element={<SaasList />} />
            </Route>

            {/* user Routes */}
            <Route
              path="/employee"
              element={
                <RoleRoute allowedRoles={["employee"]}>
                  <DashboardLayout />
                </RoleRoute>
              }
            >
              <Route index element={<UserDashboard />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
