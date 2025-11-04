import React from "react";

export default function Sidebar({ activeTab, setActiveTab }) {
  const tabs = [
    "Dashboard",
    "Tourists",
    "Alerts",
    "AI & Analytics",
    "Maps & Geo-Fencing",
    "Blockchain IDs",
    "IoT Devices",
    "Reports",
    "Settings",
  ];

  return (
    <aside className="w-64 bg-white shadow-md p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-6 text-blue-600">SmartTourSafe</h1>
      <nav className="flex-1 space-y-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-full text-left px-4 py-2 rounded-lg ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-blue-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
      <button className="mt-auto bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
        Logout
      </button>
    </aside>
  );
}
