/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';

const AuthorLoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/author/login', { username, password });
            localStorage.setItem('authToken', response.data.token);
            alert('Login successful');
        } catch (error) {
            alert('Login failed');
        }
    };

    return (
        <div>
            <h1>Author Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default AuthorLoginPage;
