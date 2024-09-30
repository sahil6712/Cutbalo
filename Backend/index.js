const express = require('express');
const connectDB = require('./dbConnect'); // Adjust path as necessary
const userRoutes = require('./routes/user'); // Import user routes

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Connect to the database
connectDB();

// Use user routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
