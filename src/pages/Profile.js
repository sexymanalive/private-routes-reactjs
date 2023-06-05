import React from "react";
import Person from "@mui/icons-material/Person";
import { BasicPage } from "../components/BasicPage";
const Profile = () => {
  return <BasicPage title="Protected Page" icon={<Person />} />;
};

export default Profile;
