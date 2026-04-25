import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import SaasList from "./pages/SaasList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
        <Route path="/admin/saas-list" element={<SaasList />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
