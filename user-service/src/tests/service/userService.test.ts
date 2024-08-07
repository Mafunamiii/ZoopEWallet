// src/tests/service/userService.test.ts
import { UserService } from '../../services/implementation/userService';
import User from '../../models/User'; // Adjust path if necessary
import { UserInput } from '../../dto/UserInput';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const userService = new UserService();
let mongoServer: MongoMemoryServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

beforeEach(async () => {
    await User.deleteMany({});
});

test('should add a new user', async () => {
    // Arrange
    const userInput: UserInput = {
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
