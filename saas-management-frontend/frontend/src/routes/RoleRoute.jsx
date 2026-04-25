import { Outlet } from "react-router-dom";
import { useAuthContext } from "../context/auth/UseAuthContext";

const RoleRoute = ({ allowedRoles }) => {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <h1>loading....</h1>;
  }

  if (!user) {
    return <h1>please login</h1>;
  }

  if (!allowedRoles.includes(user.role)) {
    return <h1>unauthorised</h1>;
  }

  return <Outlet />;
};

export default RoleRoute;
