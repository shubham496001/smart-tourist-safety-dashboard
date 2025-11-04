import React from "react";
import DataTable from "../components/DataTable";

const columns = [
  { key: "id", title: "Tourist ID" },
  { key: "blockHash", title: "Blockchain Hash" },
  { key: "issued", title: "Issued Date" },
  { key: "expiry", title: "Expiry Date" },
];

const data = [
  { id: "T123", blockHash: "0xabc123...", issued: "2025-11-01", expiry: "2025-11-15" },
  { id: "T124", blockHash: "0xdef456...", issued: "2025-11-01", expiry: "2025-11-15" },
];

export default function Blockchain() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Blockchain IDs</h2>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
