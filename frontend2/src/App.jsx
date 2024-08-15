/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routing/AppRoutes';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setIsAuthenticated(true);
    setUsername(username); // Store the username
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername(''); // Clear the username
  };

  return (
    <Router>
      <div>
        <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} username={username} />
        <AppRoutes onLogin={handleLogin} />
      </div>
    </Router>
  );
};

export default App;
