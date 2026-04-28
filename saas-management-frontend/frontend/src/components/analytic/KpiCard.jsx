import React from "react";

const KpiCard = ({ title, value, subtitle, icon, color }) => {
  return (
    <div
      className="rounded-2xl shadow-md p-5 bg-white flex flex-col gap-2 border"
      style={{ borderLeft: `5px solid ${color}` }}
    >
      {/* Top Row */}
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <span className="text-xl">{icon}</span>
      </div>

      {/* Main Value */}
      <h2 className="text-2xl font-bold text-gray-800">
        ₹ {value.toLocaleString()}
      </h2>

      {/* Optional Subtitle */}
      {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
    </div>
  );
};

export default KpiCard;
