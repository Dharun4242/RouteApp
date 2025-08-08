import { Outlet, NavLink } from "react-router-dom";

const SettingsLayout = () => {
  return (
    <div className="flex">
      <aside className="w-48 p-4 bg-gray-100 h-screen">
        <h2 className="mb-4 font-bold">Settings Menu</h2>
        <ul className="space-y-2">
          <li>
            <NavLink to="profile" className="hover:underline">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="security" className="hover:underline">
              Security
            </NavLink>
          </li>
        </ul>
      </aside>
      <main className="p-4 flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default SettingsLayout;
