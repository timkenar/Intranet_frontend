import React from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { AuthProvider } from './context/AuthContext';


import Profile from './components/profile/profile';
import Register from './components/auth/register';
import Login from './components/auth/Login';
import Home from './components/dashboard/Home';
import Dashboard from './components/dashboard/dashboard';
import ConditionalSidebar from './components/sidebar/ConditionalSidebar';
import Directory from './components/Directory/directory';

// import Settings from './components/Pages/settings';

// import PasswordRecovery from './components/auth/PasswordRecovery';
// import SignUp from './components/auth/Signup';
// import  Resources from './components/Resources/Resources'






const PrivateRoute = ({ element: Element, ...rest }) => {
  const { authTokens } = useAuth();
  return authTokens ? <Element {...rest} /> : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
      <ConditionalSidebar>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<PrivateRoute element={Profile} />} />
          {/* <Route path="/recover" element={<PasswordRecovery />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/settings" element={<Settings />} /> */}
          <Route path="/directory" element={<Directory/>} />
          {/* <Route path="/resources" element={<Resources />} /> */}
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </ConditionalSidebar>
      </AuthProvider>
    </Router>
  );
};

export default App;
