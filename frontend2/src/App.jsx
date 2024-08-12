/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '../src/routing/AppRoutes';

const App = () => {
  return (
    <Router>
      <div>
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
