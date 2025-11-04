import React from "react";

export default function Settings() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">System Settings</h2>
      <p className="mb-2">Manage user roles, language preferences, data privacy settings, and admin controls.</p>
      <ul className="list-disc ml-6 text-gray-700">
        <li>User Roles (Admin / Police / Staff)</li>
        <li>Language Preferences (English + Indian Languages)</li>
        <li>Data Privacy & Security Settings</li>
        <li>System Logs & Monitoring</li>
      </ul>
    </div>
  );
}
