// index.js
import express from 'express';
import dotenv from 'dotenv';
import { router } from './productRoute.js'; // Import the router from productRoute.js

// Initialize the express app
const app = express();

// Load environment variables from .env file
dotenv.config();

// Set the port from the .env file, or default to 7000 if not set
const PORT = process.env.PORT;  // Default to 7000 if PORT is not defined

// Use the router for all routes starting with '/product'
app.use('/', router);

// Catch-all route for invalid routes
app.get('*', (req, res) => {
    res.status(404).send('Error: Invalid route');
});

// Start the server on the specified PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
