import React from "react";

export default function StatCard({ icon, title, value, color }) {
  return (
    <div className="bg-white shadow rounded-2xl p-4 flex items-center space-x-3">
      <div className={`${color} text-2xl`}>{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}
