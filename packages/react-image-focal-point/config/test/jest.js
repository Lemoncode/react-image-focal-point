module.exports = {
  rootDir: '../../',
  verbose: true,
  preset: 'ts-jest',
  restoreMocks: true,
  testEnvironment: 'jsdom',
  moduleDirectories: ['<rootDir>/src', 'node_modules'],
  setupFilesAfterEnv: ['<rootDir>/config/test/setup.ts'],
  moduleNameMapper: {
    "\\.css$": "<rootDir>/config/test/file.mock.js",
  },
};
