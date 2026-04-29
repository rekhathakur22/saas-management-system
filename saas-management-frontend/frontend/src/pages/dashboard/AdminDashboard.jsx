import axios from "axios";
import { useState, useEffect } from "react";
import KpiCard from "../../components/analytic/KpiCard";
import styles from "./AdminDashboard.module.css";

function AdminDashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "http://localhost:4000/api/saas/cost-breakdown",
        {
          withCredentials: true,
        },
      );
      console.log(res.data);
      setData(res.data);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {/* KPI Cards Grid */}
      <div className={styles.section}>
        <div className={styles.kpiGrid}>
          <KpiCard
            title="Total Annual Spend"
            value={data.totalYearlyCost}
            subtitle="Overall yearly cost"
          />

          <KpiCard
            title="Monthly Subscriptions"
            value={data.monthlyCost}
            subtitle="Recurring monthly cost"
          />

          <KpiCard
            title="Yearly Subscriptions"
            value={data.annualCost}
            subtitle="Committed yearly cost"
          />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
