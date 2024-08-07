// src/config/jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/src/tests/**'], // Adjust the pattern to match your test files
    testPathIgnorePatterns: ['/node_modules/', '/dist/'], // Ignore node_modules and build directory
    verbose: true, // Optional for more detailed output
};
