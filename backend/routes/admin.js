const express = require('express');
const bcrypt = require('bcryptjs');
const Author = require('../models/Author'); // Assuming you have an Author model

const router = express.Router();

// Admin creates an author account
router.post('/create-author', async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAuthor = new Author({ username, password: hashedPassword });
        await newAuthor.save();
        res.status(201).json({ message: 'Author created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating author', error });
    }
});

module.exports = router;
