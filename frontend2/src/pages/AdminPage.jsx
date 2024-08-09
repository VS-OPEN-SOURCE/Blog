// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/admin/create-author', { username, password });
            alert(response.data.message);
        } catch (error) {
            alert('Failed to create author');
        }
    };

    return (
        <div>
            <h1>Create Author Account</h1>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Create Author</button>
            </form>
        </div>
    );
};

export default AdminPage;
