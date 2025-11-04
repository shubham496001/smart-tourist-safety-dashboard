import React from "react";
import StatCard from "../components/StatCard";
import { Users, AlertTriangle, MapPin } from "lucide-react";
import ChartCard from "../components/ChartCard";

const chartData = [
  { name: "Jan", value: 30 },
  { name: "Feb", value: 45 },
  { name: "Mar", value: 60 },
  { name: "Apr", value: 50 },
  { name: "May", value: 70 },
];

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard icon={<Users />} title="Active Tourists" value="1,248" color="text-blue-500" />
        <StatCard icon={<AlertTriangle />} title="Active Alerts" value="12" color="text-red-500" />
        <StatCard icon={<MapPin />} title="High-Risk Zones" value="5" color="text-green-500" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ChartCard title="Tourist Arrivals Trend" data={chartData} />
        <ChartCard title="Incident Reports Trend" data={chartData} />
      </div>
    </div>
  );
}
