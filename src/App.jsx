import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/layouts/DashboardLayout";
import Overview from "./pages/Dashboard/Overview";
import Reports from "./pages/Dashboard/Reports";
import SettingsLayout from "./components/layouts/SettingsLayout";
import Profile from "./pages/Dashboard/Settings/Profile";
import Security from "./pages/Dashboard/Settings/Security";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="/dashboard/overview" element={<Overview />} />
          <Route path="/dashboard/reports" element={<Reports />} />
          <Route path="/dashboard/settings" element={<SettingsLayout />}>
            <Route path="/dashboard/settings/profile" element={<Profile />} />
            <Route path="/dashboard/settings/Security" element={<Security />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
