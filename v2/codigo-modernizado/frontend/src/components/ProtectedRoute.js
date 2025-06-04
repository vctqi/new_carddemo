import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated, hasRole } from '../utils/auth';

const ProtectedRoute = ({ children, requiredRole }) => {
  const location = useLocation();
  const authenticated = isAuthenticated();
  
  // If not authenticated, redirect to login
  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
  
  // If role is required but user doesn't have it, redirect to dashboard
  if (requiredRole && !hasRole(requiredRole)) {
    return <Navigate to="/" replace />;
  }
  
  // If authenticated and has required role (or no role required), render children
  return children;
};

export default ProtectedRoute;