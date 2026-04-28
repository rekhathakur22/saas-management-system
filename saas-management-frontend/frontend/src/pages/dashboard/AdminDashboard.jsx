import axios from "axios";
import { useState, useEffect } from "react";

function AdminDashboard() {
  const [data, setData] = useState({
    monthlyCost: 0,
    annualCost: 0,
    totalYearlyCost: 0,
    monthlyToolCount: 0,
    yearlyToolCount: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/api/saas/cost-breakdown");
      setData(res.data);
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KpiCard
          title="Total Annual Spend"
          value={data.totalYearlyCost}
          subtitle="Overall yearly cost"
          icon="💰"
          color="#4f46e5"
        />

        <KpiCard
          title="Monthly Subscriptions"
          value={data.monthlyCost}
          subtitle="Recurring monthly cost"
          icon="📅"
          color="#22c55e"
        />

        <KpiCard
          title="Yearly Subscriptions"
          value={data.annualCost}
          subtitle="Committed yearly cost"
          icon="📦"
          color="#f59e0b"
        />
      </div>
    </div>
  );
}

export default AdminDashboard;
