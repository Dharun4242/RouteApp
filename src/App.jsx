import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import DashboardLayout from "./components/layouts/DashboardLayout";
import SettingsLayout from "./components/layouts/SettingsLayout";
import Overview from "./pages/Dashboard/Overview";
import Reports from "./pages/Dashboard/Reports";
import Profile from "./pages/Dashboard/Settings/Profile";
import Security from "./pages/Dashboard/Settings/Security";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/overview" />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="overview" element={<Overview />} />
          <Route path="reports" element={<Reports />} />
        </Route>
        <Route path="/settings" element={<SettingsLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="security" element={<Security />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
