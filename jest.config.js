const tsJestPath = "/Users/amarkumarsingh/.nvm/versions/node/v24.12.0/lib/node_modules/ts-jest";

module.exports = {
    "testEnvironment": "node",
    "testMatch": [
        "**/test/**/*.test.ts",
        "**/test/**/*.test.js"
    ],
    "collectCoverageFrom": [
        "<rootDir>/**/*.ts",
        "!<rootDir>/node_modules/**",
        "!<rootDir>/coverage/**",
        "!<rootDir>/build/**",
        "!<rootDir>/jest.config.js",
        "!<rootDir>/test/**"
    ],
    "testPathIgnorePatterns": [
        "/node_modules/",
        "/build/"
    ],
    "coverageDirectory": "coverage",
    "coverageReporters": [
        "text",
        "lcov"
    ],
    "transform": {
        "^.+\\.ts$": [
            tsJestPath,
            {
                "tsconfig": "<rootDir>/tsconfig.json"
            }
        ]
    }
};
