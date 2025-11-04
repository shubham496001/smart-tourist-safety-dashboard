import React from "react";
import DataTable from "../components/DataTable";

const columns = [
  { key: "reportId", title: "Report ID" },
  { key: "type", title: "Report Type" },
  { key: "date", title: "Date" },
  { key: "status", title: "Status" },
];

const data = [
  { reportId: "R101", type: "Weekly Tourist Safety", date: "2025-11-03", status: "Generated" },
  { reportId: "R102", type: "Incident Summary", date: "2025-11-03", status: "Pending" },
];

export default function Reports() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Reports & Data Export</h2>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
