import React from "react";
import DataTable from "../components/DataTable";

const columns = [
  { key: "deviceId", title: "Device ID" },
  { key: "touristId", title: "Tourist ID" },
  { key: "status", title: "Status" },
  { key: "lastSignal", title: "Last Signal" },
];

const data = [
  { deviceId: "D101", touristId: "T123", status: "Active", lastSignal: "2025-11-03 11:00" },
  { deviceId: "D102", touristId: "T124", status: "Active", lastSignal: "2025-11-03 10:45" },
];

export default function IoTDevices() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">IoT Devices Monitoring</h2>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
