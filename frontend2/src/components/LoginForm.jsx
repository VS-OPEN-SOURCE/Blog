/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    // Logout logic
    localStorage.removeItem('user');
    setUser(null);
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand */}
        <div className="text-white text-lg font-bold">
          <Link to="/">Brand</Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/studydoc" className="text-gray-300 hover:text-white">
            Study Doc
          </Link>
          <Link to="/Blog" className="text-gray-300 hover:text-white">
            Blog
          </Link>
          <Link to="/About" className="text-gray-300 hover:text-white">
            About
          </Link>
        </div>

        {/* User Info or Login Button */}
        <div className="flex space-x-4">
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-white">Welcome, {user.username}</span>
              <Button
                onClick={handleLogout}
                label="Logout"
                className="bg-red-500 hover:bg-red-600"
              />
            </div>
          ) : (
            <Link to="/LoginPage">
              <Button
                label="Login"
                className="bg-blue-500 hover:bg-blue-600"
              />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
