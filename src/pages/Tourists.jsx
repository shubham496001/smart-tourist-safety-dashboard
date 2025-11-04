import React from "react";
import DataTable from "../components/DataTable";

const columns = [
  { key: "id", title: "Tourist ID" },
  { key: "name", title: "Name" },
  { key: "itinerary", title: "Itinerary" },
  { key: "risk", title: "Risk Score" },
  { key: "status", title: "Status" },
];

const data = [
  { id: "T123", name: "John Doe", itinerary: "Delhi → Agra → Jaipur", risk: "Low", status: "Active" },
  { id: "T124", name: "Jane Smith", itinerary: "Mumbai → Goa", risk: "Medium", status: "Active" },
  { id: "T125", name: "Rahul Kumar", itinerary: "Kolkata → Sikkim", risk: "High", status: "Missing" },
];

export default function Tourists() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Tourist Management</h2>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
