import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // Get user and loading state from AuthContext
  const { user, loading } = useContext(AuthContext);

  // Get the current location so we can redirect back after login
  const location = useLocation();

  // Show a loading indicator while authentication status is being determined
  if (loading) {
    return <div className="flex justify-center"><progress className="progress w-56"></progress></div>;
  }

  if (user) {
    return children; // If user is authenticated, render the children components
  }
  // If not authenticated, redirect to login page and preserve the current location
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;