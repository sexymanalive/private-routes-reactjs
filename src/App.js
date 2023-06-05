import React from "react";
import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home";

import ProtectedLayout from "./components/ProtectedLayout";
import HomeLayout from "./components/HomeLayout";
import LoginPage from "./pages/LoginPage";
import { SettingPages } from "./components/SettingPages";
import Profile from "./pages/Profile";
function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<SettingPages />} />
      </Route>
    </Routes>
  );
}

export default App;
