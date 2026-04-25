import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
const AdminSidebar = () => {
  return (
    <div>
      <h2 className={styles.logo}>SaaSDesk</h2>

      <ul className={styles.menu}>
        <li>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/saas-list"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            SaaS Tools
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add-saas"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Add SaaS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/assign"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Assign SaaS
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
