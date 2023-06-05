import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Link, Navigate } from "react-router-dom";

const HomeLayout = () => {
  const { user } = useAuth;

  if (user) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default HomeLayout;
