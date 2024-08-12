/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6">Welcome to the Home Page</h1>
        <p className="text-lg">
          This is the home page of your application. You can add more content here.
        </p>
      </div>
    </div>
  );
};

export default Home;
