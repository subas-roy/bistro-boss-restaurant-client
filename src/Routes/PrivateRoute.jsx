import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // Get user and loading state from AuthContext
  const { user, loading } = useContext(AuthContext);

  // Show a loading indicator while authentication status is being determined
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user) {
    return children; // If user is authenticated, render the children components
  }
  return <Navigate to="/login" />; // If not authenticated, redirect to login page
};

export default PrivateRoute;