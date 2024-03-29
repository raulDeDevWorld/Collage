import React, { useContext, useEffect, useState } from "react";
import { onAuth } from "../firebase";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(false)
    return onAuth(setUser);
  }, [])

  return (
    <AuthContext.Provider value={{user}} >
      {!loading && children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('error')
  }
  return context
}