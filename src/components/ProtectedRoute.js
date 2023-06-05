import React from "react";
import { useAuth } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // user is not logged in, redirect to login page
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
