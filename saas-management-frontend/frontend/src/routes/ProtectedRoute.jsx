import { useAuthContext } from "../context/auth/UseAuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { user, loading } = useAuthContext();

  if (loading) return <h1>Loading</h1>;

  if (!user) return <Navigate to="/" />;

  return <Outlet />;
};

export default ProtectedRoute;
