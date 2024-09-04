import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const existingTokens = JSON.parse(localStorage.getItem('tokens'));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem('tokens', JSON.stringify(data));
    setAuthTokens(data);
  };

  const logout = () => {
    setAuthTokens(null);
    localStorage.removeItem('tokens');
    localStorage.removeItem('refreshToken');
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
