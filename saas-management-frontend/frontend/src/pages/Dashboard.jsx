import { useEffect, useState } from "react";
import axios from "axios";
import AdminDashboard from "./AdminDashboard";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/api/auth/me", {
          withCredentials: true,
        });
        setUser(data.user.role);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      {/* role based access */}
      {user === "admin" && navigate("/admin/dashboard")}
      {user === "employee" && <h3>hello employee ...</h3>}
    </div>
  );
}

export default Dashboard;
