import React from "react";
import DataTable from "../components/DataTable";

const columns = [
  { key: "alertId", title: "Alert ID" },
  { key: "touristId", title: "Tourist ID" },
  { key: "type", title: "Alert Type" },
  { key: "time", title: "Timestamp" },
  { key: "status", title: "Status" },
];

const data = [
  { alertId: "A101", touristId: "T125", type: "Panic", time: "2025-11-03 10:12", status: "Active" },
  { alertId: "A102", touristId: "T124", type: "Geo-fence", time: "2025-11-03 09:30", status: "Resolved" },
];

export default function Alerts() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Alerts & Incident Monitoring</h2>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
