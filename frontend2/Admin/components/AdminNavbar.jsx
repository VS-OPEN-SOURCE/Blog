/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

const AdminSidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="flex flex-col flex-grow">
        <nav className="flex flex-col mt-4">
          <Link to="/AdminPage" className="px-4 py-2 hover:bg-gray-700">Create Author</Link>
          <Link to="/" className="px-4 py-2 hover:bg-gray-700">Create Blog</Link>
          <Link to="/" className="px-4 py-2 hover:bg-gray-700">Study Docs</Link>
          <Link to="/" className="px-4 py-2 hover:bg-gray-700">Donated Docs</Link>
        </nav>
      </div>
      <div className="mt-auto mb-4 px-4">
        <button className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded">Logout</button>
      </div>
    </div>
  );
};

export default AdminSidebar;
