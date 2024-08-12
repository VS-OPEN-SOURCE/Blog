/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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

        {/* Login Button */}
        <div className="flex space-x-4">
          <Link
            to="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
      