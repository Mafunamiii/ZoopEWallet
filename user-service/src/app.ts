import express from 'express';
import {connectToDatabase} from "./config/index";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
console.log('MongoDB URI:', process.env.MONGO_URI);

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

// Import and use routes here (e.g., app.use('/api/users', userRoutes);)

// Connect to the database
connectToDatabase();

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
