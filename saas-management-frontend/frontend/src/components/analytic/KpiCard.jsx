import React from "react";

const KpiCard = ({ title, value = 0, subtitle }) => {
  return (
    <div>
      {/* Top Row */}
      <div>
        <h3>{title}</h3>
      </div>

      {/* Main Value */}
      <h2>₹ {value.toLocaleString()}</h2>

      {/* Optional Subtitle */}
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default KpiCard;
