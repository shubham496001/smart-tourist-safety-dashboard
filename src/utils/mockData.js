// Mock data for tables and alerts
export const touristsData = [
  { id: "T123", name: "John Doe", itinerary: "Delhi → Agra → Jaipur", risk: "Low", status: "Active" },
  { id: "T124", name: "Jane Smith", itinerary: "Mumbai → Goa", risk: "Medium", status: "Active" },
  { id: "T125", name: "Rahul Kumar", itinerary: "Kolkata → Sikkim", risk: "High", status: "Missing" },
];

export const alertsData = [
  { alertId: "A101", touristId: "T125", type: "Panic", time: "2025-11-03 10:12", status: "Active" },
  { alertId: "A102", touristId: "T124", type: "Geo-fence", time: "2025-11-03 09:30", status: "Resolved" },
];

export const blockchainData = [
  { id: "T123", blockHash: "0xabc123...", issued: "2025-11-01", expiry: "2025-11-15" },
  { id: "T124", blockHash: "0xdef456...", issued: "2025-11-01", expiry: "2025-11-15" },
];

export const iotDevicesData = [
  { deviceId: "D101", touristId: "T123", status: "Active", lastSignal: "2025-11-03 11:00" },
  { deviceId: "D102", touristId: "T124", status: "Active", lastSignal: "2025-11-03 10:45" },
];
