import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">SmartTourSafe</h1>
      <div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          Logout
        </button>
      </div>
    </nav>
  );
}
