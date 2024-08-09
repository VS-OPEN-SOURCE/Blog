const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Author = require('../models/Author'); // Assuming you have an Author model

const router = express.Router();

// Author login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const author = await Author.findOne({ username });
        if (!author) {
            return res.status(400).json({ message: 'Author not found' });
        }
        const isMatch = await bcrypt.compare(password, author.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ authorId: author._id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
});

module.exports = router;
