import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
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

  // Function to create a new user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Listen for authentication state changes and update user state accordingly
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('current user', currentUser);
      setLoading(false);
    });
    // Cleanup subscription on unmount
    return () => {
      unsubscribe();
    }
  }, [])

  // Object containing authentication info to provide via context
  const authInfo = {
    user,
    loading,
    createUser
  }

  // Provide authentication context to child components
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;