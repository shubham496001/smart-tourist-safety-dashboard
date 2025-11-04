import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Tourists from "./pages/Tourists";
import Alerts from "./pages/Alerts";
import Analytics from "./pages/Analytics";
import Maps from "./pages/Maps";
import Blockchain from "./pages/Blockchain";
import IoTDevices from "./pages/IoTDevices";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

export default function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const renderPage = () => {
    switch (activeTab) {
      case "Dashboard":
        return <Dashboard />;
      case "Tourists":
        return <Tourists />;
      case "Alerts":
        return <Alerts />;
      case "AI & Analytics":
        return <Analytics />;
      case "Maps & Geo-Fencing":
        return <Maps />;
      case "Blockchain IDs":
        return <Blockchain />;
      case "IoT Devices":
        return <IoTDevices />;
      case "Reports":
        return <Reports />;
      case "Settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {renderPage()}
      </main>
    </div>
  );
}
