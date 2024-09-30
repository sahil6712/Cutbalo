const mongoose = require('mongoose');

const dbURI = 'mongodb://0.0.0.0:27017/Enviroment';

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected...');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error; // Rethrow to handle it in the router if needed
    }
};

module.exports = connectDB;