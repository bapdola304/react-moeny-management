import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  const isAuthenticated = token !== undefined && token !== null;

  return true ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
