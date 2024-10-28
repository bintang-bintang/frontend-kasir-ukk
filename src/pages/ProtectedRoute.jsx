import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children, allowedRoles }) => {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/login" />;
    }

    const decoded = jwtDecode(token);
    const role = decoded.role;

    // Jika role tidak sesuai
    if (!allowedRoles.includes(role)) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
