import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Create the context
const AuthContext = createContext();

// Hook to use the Auth context
export const useAuth = () => useContext(AuthContext);

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const existingTokens = JSON.parse(localStorage.getItem('tokens'));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  // Set and store tokens
  const setTokens = (data) => {
    localStorage.setItem('tokens', JSON.stringify(data));
    setAuthTokens(data);
  };

  // Handle logout
  const logout = () => {
    setAuthTokens(null);
    localStorage.removeItem('tokens');
    localStorage.removeItem('refreshToken');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
