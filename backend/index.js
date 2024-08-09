const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const authorRoutes = require('./routes/author');

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);  // Existing auth routes
app.use('/api/admin', adminRoutes); // Admin routes for creating authors
app.use('/api/author', authorRoutes); // Author routes for login

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/authDB')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

app.listen(5000, () => console.log('Server running on port 5000'));
