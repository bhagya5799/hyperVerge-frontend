import React from 'react';
import {  Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Element }) => {
    const isAuthenticated = localStorage.getItem("adminToken");

    if (!isAuthenticated ) {
        return <Navigate to="/user" />;
    }
  
    return <Element />;
};
export default ProtectedRoute