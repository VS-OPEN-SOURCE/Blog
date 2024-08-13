/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from '../components/Form';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // To handle error messages
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      if (response.status === 200) { // Check if the login was successful
        localStorage.setItem('user', JSON.stringify({ username }));
        alert('Login successful!');
        onLogin(); // Notify parent component about login status
        navigate('/');
      } else {
        setError('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error.response ? error.response.data : error.message);
      setError('Login failed. Please try again.');
    }
  };

  const inputs = [
    { type: 'text', placeholder: 'Username', value: username, onChange: e => setUsername(e.target.value) },
    { type: 'password', placeholder: 'Password', value: password, onChange: e => setPassword(e.target.value) },
    { type: 'submit', submitText: 'Log In' }
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <Form onSubmit={handleSubmit} inputs={inputs} />
        <p className="text-center mt-4 text-blue-500 cursor-pointer hover:underline">
          <a href="/SignupPage">Don&apos;t have an account? Sign Up</a>
        </p>
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;
