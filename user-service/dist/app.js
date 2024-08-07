"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("./config/index");
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from .env file
dotenv_1.default.config();
console.log('MongoDB URI:', process.env.MONGO_URI);
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.use(express_1.default.json());
// Import and use routes here (e.g., app.use('/api/users', userRoutes);)
// Connect to the database
(0, index_1.connectToDatabase)();
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
