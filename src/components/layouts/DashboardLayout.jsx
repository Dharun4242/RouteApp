import { Outlet, NavLink } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <aside className="w-48 p-4 bg-gray-100 h-screen">
        <h2 className="mb-4 font-bold">Dashboard Menu</h2>
        <ul className="space-y-2">
          <li>
            <NavLink to="overview" className="hover:underline">
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink to="reports" className="hover:underline">
              Reports
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

export default DashboardLayout;
