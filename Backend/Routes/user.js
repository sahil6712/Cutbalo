const express = require('express');
const User = require('../modals/CreateUser');
const connectDB = require('../dbConnect'); // Ensure this is an async function
const router = express.Router();

// Connect to the database
(async () => {
    try {
        await connectDB(); // Call the connection function
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
    }
})();

// Sign-up route
router.post('/', async (req, res) => {
    const { email, password } = req.body; // Correctly access req.body
    const user = new User({ email, password });

    try {
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
