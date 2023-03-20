module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['lib/**/*.js'],
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.ts?$': 'ts-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleNameMapper: {
      '@/(.*)': '<rootDir>/$1',
    },
  }
