import React from "react";
import { Navigate } from "react-router";
import Dashboard from "../components/Dashboard/Dashboard";

const ProtectedRoute = ({ isAllowed, redirectPath = "/", children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children || <Dashboard />;
};

export default ProtectedRoute;
