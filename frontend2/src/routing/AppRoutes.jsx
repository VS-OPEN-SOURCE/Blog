/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../pages/Home';
import StudyDoc from '../pages/studydoc';
import Blog from '../pages/Blog';
import About from '../pages/About';
import Login from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import AdminPage from '../../Admin/AdminPage';
import AuthorLoginPage from '../pages/AuthorLoginPage';


const AppRoutes = ({ onLogin }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/studydoc" element={<StudyDoc />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login onLogin={onLogin} />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/AdminPage" element={<AdminPage />} />
      <Route path="/author-login" element={<AuthorLoginPage />} />
    </Routes>
  );
};

AppRoutes.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default AppRoutes;
