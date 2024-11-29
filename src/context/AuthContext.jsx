import React, { createContext, useState, useContext } from 'react';
import { loginUser } from '../api/apiAuth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await loginUser(email, password);
      const authToken = response.data.token;
      setToken(authToken);
      localStorage.setItem('token', authToken);
      setLoading(false);
      return { success: true };
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.error || 'Something went wrong');
      return { success: false };
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };


  

  return (
    <AuthContext.Provider value={{ token, login, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
