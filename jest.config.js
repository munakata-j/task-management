// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testMatch: ['**/__tests__/**/*.test.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    roots: ['<rootDir>/src'],
    modulePaths: ['<rootDir>/src'],
    moduleNameMapper: {
        '\\.css$': 'identity-obj-proxy',
    },
};
