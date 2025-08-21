import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.config";

// Create a context for authentication
const AuthContext = createContext(null);

// Initialize Firebase authentication with the app instance
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  // State to hold the current user
  // FIXED: Typo 'cosnt' to 'const'
  const [user, setUser] = useState(null);

  // State to indicate loading status
  const [loading, setLoading] = useState(true);

  // Object containing authentication info to provide via context
  const authInfo = {
    user,
    loading,
  }

  // Provide authentication context to child components
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;