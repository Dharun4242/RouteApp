import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-60 bg-gray-100 p-4">
        <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
        <ul className="space-y-2">
          <li>
            <NavLink
              to="overview"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold " : "text-gray-700"
              }
            >
              Overview
            </NavLink>
          </li>

          <li>
            <NavLink
              to="reports"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold " : "text-gray-700"
              }
            >
              Reports
            </NavLink>
          </li>

          <li>
            <NavLink
              to="settings/profile"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold " : "text-gray-700"
              }
            >
              Profile
            </NavLink>
          </li>

          <li>
            <NavLink
              to="settings/Security"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold " : "text-gray-700"
              }
            >
              Security
            </NavLink>
          </li>
        </ul>
      </aside>
      <main className="flex-1 p-6 bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
