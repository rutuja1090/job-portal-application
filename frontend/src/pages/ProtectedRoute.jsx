import React from "react";
import { Navigate } from "react-router-dom";

// children = page/component to render
// roleRequired = optional role restriction ('student' or 'admin')
const ProtectedRoute = ({ children, roleRequired }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    // Not logged in → redirect to login
    if (roleRequired === "admin") return <Navigate to="/admin/login" replace />;
    return <Navigate to="/login" replace />;
  }

  if (roleRequired && role !== roleRequired) {
    // Logged in but wrong role → redirect
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
