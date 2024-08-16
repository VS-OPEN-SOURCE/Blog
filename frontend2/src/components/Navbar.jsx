/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import PropTypes from 'prop-types';

const Navbar = ({ isAuthenticated, onLogout, username }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/">Brand</Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/StudyDoc" className="text-gray-300 hover:text-white">Study Doc</Link>
          <Link to="/Blog" className="text-gray-300 hover:text-white">Blog</Link>
          <Link to="/About" className="text-gray-300 hover:text-white">About</Link>
        </div>

        <div className="flex space-x-4 items-center">
          {isAuthenticated ? (
            <>
              <span className="text-white">Welcome, {username}!</span>
              <Button
                label="Logout"
                className="bg-red-500 hover:bg-red-600"
                onClick={onLogout}
              />
            </>
          ) : (
            <Link to="/LoginPage">
              <Button label="Login" className="bg-blue-500 hover:bg-blue-600" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

export default Navbar;
