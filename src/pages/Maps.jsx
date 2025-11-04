import React from "react";
import MapView from "../components/MapView";

const markers = [
  { position: [28.6139, 77.209], label: "Delhi - Tourist Cluster" },
  { position: [26.9124, 75.7873], label: "Jaipur - High-Risk Zone" },
  { position: [21.1458, 79.0882], label: "Nagpur - Tourist Cluster" },
];

export default function Maps() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Maps & Geo-Fencing</h2>
      <MapView center={[22.9734, 78.6569]} zoom={5} markers={markers} />
    </div>
  );
}
