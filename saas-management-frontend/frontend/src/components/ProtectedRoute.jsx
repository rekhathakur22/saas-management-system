import { useAuthContext } from "../context/UseAuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const { user, loading } = useAuthContext();

  if (loading) return <h1>Loading</h1>;

  if (!user) return <Navigate to="/" />;

  if (role && user.role !== role) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default ProtectedRoute;
