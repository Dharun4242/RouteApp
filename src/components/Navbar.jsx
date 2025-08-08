import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-6 p-4 bg-gray-800 text-white">
      <NavLink
        to="/dashboard/overview"
        className={({ isActive }) =>
          isActive ? "font-bold underline" : "hover:underline"
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/settings/profile"
        className={({ isActive }) =>
          isActive ? "font-bold underline" : "hover:underline"
        }
      >
        Settings
      </NavLink>
    </nav>
  );
};

export default Navbar;
