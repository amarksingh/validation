module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/test/**/*.test.js'],
    collectCoverageFrom: [
        '<rootDir>/**/*.js',
        '!<rootDir>/node_modules/**',
        '!<rootDir>/coverage/**',
        '!<rootDir>/jest.config.js',
        '!<rootDir>/test/**'
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov']
};
