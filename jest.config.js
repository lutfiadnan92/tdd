/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      lines: 80,
      branches: 80,
      statements: 70,
      functions: 80
    }
  }
};