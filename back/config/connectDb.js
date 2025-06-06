// src/config/db.js
const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {});
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit process if connection fails
    }
};

module.exports = connectDB;
