import React from "react";
import ChartCard from "../components/ChartCard";

const behaviorData = [
  { name: "Week 1", value: 5 },
  { name: "Week 2", value: 12 },
  { name: "Week 3", value: 7 },
  { name: "Week 4", value: 15 },
];

export default function Analytics() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">AI & Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ChartCard title="Anomaly Detection" data={behaviorData} />
        <ChartCard title="Predicted High-Risk Zones" data={behaviorData} />
      </div>
    </div>
  );
}
