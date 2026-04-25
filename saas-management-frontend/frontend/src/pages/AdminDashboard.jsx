import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Admin</h1>
      <button onClick={() => navigate("/admin/saas-list")}>All-Saas</button>
    </div>
  );
}

export default AdminDashboard;
