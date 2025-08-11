// ProtectedRoute.jsx
import React from "react";
import {  Navigate } from 'react-router'


export default function ProtectedRoute({ children }) {
  const storedUser = localStorage.getItem("user");

  // If no user in local storage, redirect to landing page
  if (!storedUser) {
    return <Navigate to="/" replace />;
  }

  return children;
}
