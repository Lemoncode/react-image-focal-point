export default {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  extensionsToTreatAsEsm: ['.ts'],
  restoreMocks: true,
  testEnvironment: 'jsdom',
  moduleDirectories: ['**/src', 'node_modules'],
  setupFilesAfterEnv: ['@lemoncode/config/test/unit/setup.ts'],
  moduleNameMapper: {
    '\\.css$': '@lemoncode/config/test/unit/file.mock.js',
  },
  modulePathIgnorePatterns: ['<rootDir>/e2e'],
};
