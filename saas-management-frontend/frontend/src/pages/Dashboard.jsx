import { useEffect, useState } from "react";
import axios from "axios";
function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/api/auth/me", {
          withCredentials: true,
        });
        setUser(data.user.role);
        console.log(data.user.role);
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
      {user === "admin" && <h3>hello admin ...</h3>}
      {user === "employee" && <h3>hello employee ...</h3>}
    </div>
  );
}

export default Dashboard;
