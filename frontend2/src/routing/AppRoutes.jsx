/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../pages/Home';
import StudyDoc from '../pages/StudyDoc';
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
      <Route path="/StudyDoc" element={<StudyDoc />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/About" element={<About />} />
      <Route path="/LoginPage" element={<Login onLogin={onLogin} />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/AdminPage" element={<AdminPage />} />
      <Route path="/AuthorLoginPage" element={<AuthorLoginPage />} />
    </Routes>
  );
};

AppRoutes.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default AppRoutes;
