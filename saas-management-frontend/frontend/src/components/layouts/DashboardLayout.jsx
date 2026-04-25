import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <h1>dashboard layout</h1>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
