/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Studydoc from '../pages/studydoc';
import Blog from '../pages/Blog';
import About from '../pages/About';
import Login from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage'; // Import SignupPage
import AdminPage from '../pages/AdminPage'; // Import AdminPage

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/studydoc" element={<Studydoc />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/About" element={<About />} />
      <Route path="/LoginPage" element={<Login />} />
      <Route path="/SignupPage" element={<SignupPage />} /> {/* SignupPage route */}
      <Route path="/AdminPage" element={<AdminPage />} /> {/* AdminPage route */}
    </Routes>
  );
};

export default AppRoutes;
