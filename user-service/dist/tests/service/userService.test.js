"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/tests/service/userService.test.ts
const userService_1 = require("../../services/implementation/userService");
const User_1 = __importDefault(require("../../models/User")); // Adjust path if necessary
const mongoose_1 = __importDefault(require("mongoose"));
const mongodb_memory_server_1 = require("mongodb-memory-server");
const userService = new userService_1.UserService();
let mongoServer;
beforeAll(async () => {
    mongoServer = await mongodb_memory_server_1.MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose_1.default.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
});
afterAll(async () => {
    await mongoose_1.default.disconnect();
    await mongoServer.stop();
});
beforeEach(async () => {
    await User_1.default.deleteMany({});
});
test('should add a new user', async () => {
    // Arrange
    const userInput = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password123',
    };
    // Act
    const user = await userService.addUser(userInput);
    // Assert
    expect(user).toBeDefined();
    expect(user.name).toBe(userInput.name);
    expect(user.email).toBe(userInput.email);
});
