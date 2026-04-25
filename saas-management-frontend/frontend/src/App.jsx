import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import SaasList from "./pages/saas/SaasList";
import { AuthProvider } from "./context/auth/AuthProvider";
import ProtectedRoute from "./routes/ProtectedRoute";
import RoleRoute from "./routes/RoleRoute";
import AdminDashboardLayout from "./components/layouts/AdminDashboardLayout";
import EmployeeDashboardLayout from "./components/layouts/EmployeeDashboardLayout";
import UserDashboard from "./pages/dashboard/UserDashboard";
import AddSaas from "./pages/saas/AddSaas";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />}></Route>

          {/* protected root */}
          <Route element={<ProtectedRoute />}>
            {/* admin Routes */}
            <Route element={<RoleRoute allowedRoles={["admin"]} />}>
              <Route path="/admin" element={<AdminDashboardLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="saas-list" element={<SaasList />} />
                <Route path="add-saas" element={<AddSaas />} />
              </Route>
            </Route>
            {/* user Routes */}
            <Route
              path="/employee"
              element={
                <RoleRoute allowedRoles={["employee"]}>
                  <EmployeeDashboardLayout />
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
