// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import AdminSidebar from './components/AdminNavbar'; // Adjust the path as necessary

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
        <div className="flex">
            <AdminSidebar />
            <div className="flex-grow p-8">
                <h1 className="text-2xl font-bold mb-4">Create Author Account</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                        className="p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        className="p-2 border border-gray-300 rounded"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Create Author
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminPage;
