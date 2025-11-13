import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";


export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) return null;
    try {
      const decoded = jwtDecode(token);
      return { token, email: decoded.email };
    } catch { return null; }
  });

  const login = (token) => {
    localStorage.setItem('admin_token', token);
    setAdmin({ token });
  };
  const logout = () => {
    localStorage.removeItem('admin_token');
    setAdmin(null);
  };

  return <AuthContext.Provider value={{ admin, login, logout }}>{children}</AuthContext.Provider>;
}
