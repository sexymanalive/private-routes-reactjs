import React from "react";
import { Link, Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();
  if (!user) return <Navigate to="/login" />;
  return (
    <div>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      {outlet}
    </div>
  );
};
//  <Outlet /> instead of using outlet , we can also use the outlet hook .
export default ProtectedLayout;
