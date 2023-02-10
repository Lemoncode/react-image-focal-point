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
  setupFilesAfterEnv: ['@lemoncode/config/test/jest/setup.ts'],
  moduleNameMapper: {
    '\\.css$': '@lemoncode/config/test/jest/file.mock.js',
  },
};
