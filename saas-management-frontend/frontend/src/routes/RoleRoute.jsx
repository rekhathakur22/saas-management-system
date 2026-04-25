import { Outlet } from "react-router-dom";
import { useAuthContext } from "../context/auth/UseAuthContext";

const RoleRoute = ({ allowedRoles }) => {
  const { user } = useAuthContext();

  if (allowedRoles.includes(user?.role)) {
    return <Outlet />;
  } else {
    return <h1>Unauthorized</h1>;
  }
};

export default RoleRoute;
