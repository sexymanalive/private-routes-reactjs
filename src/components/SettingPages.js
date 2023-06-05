import React from "react";
import { BasicPage } from "./BasicPage";
import SettingsIcon from "@mui/icons-material/Settings";

export const SettingPages = () => {
  return <BasicPage title="Settings" icon={<SettingsIcon />} />;
};
