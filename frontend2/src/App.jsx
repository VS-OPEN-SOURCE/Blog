/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routing/AppRoutes';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div>
        <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <AppRoutes onLogin={handleLogin} />
      </div>
    </Router>
  );
};

export default App;
