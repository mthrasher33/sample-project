import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(css|less|scss)$': '<rootDir>/config/jest/cssTransform.ts'
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '<rootDir>/src/setup-jest.ts'
  ],
  collectCoverage: true,
  collectCoverageFrom: ['./src/**', '!./src/index.tsx'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
};

export default config;
