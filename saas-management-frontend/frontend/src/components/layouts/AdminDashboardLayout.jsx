import { Outlet } from "react-router-dom";
import AdminSidebar from "../sidebar/AdminSidebar";
import styles from "./AdminDashboardLayout.module.css";

const AdminDashboardLayout = () => {
  return (
    <div className={styles.layout}>
      <AdminSidebar />

      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
