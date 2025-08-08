import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const SettingsLayout = () => {
  return (
    <div className="p-4">
      <div className="mb-4 border-b border-gray-200">
        <nav className="flex space-x-4">
          <NavLink
            to="profile"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-blue-500 pb-1 text-blue-600 font-medium"
                : "pb-1 text-gray-600 hover:text-blue-500"
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="security"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-blue-500 pb-1 text-blue-600 font-medium"
                : "pb-1 text-gray-600 hover:text-blue-500"
            }
          >
            Security
          </NavLink>
        </nav>
      </div>

      <Outlet />
    </div>
  );
};

export default SettingsLayout;
