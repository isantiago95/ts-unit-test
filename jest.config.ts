import type {Config} from 'jest';

const baseDir = '<rootDir>/src/app/doubles'
const baseTestDir = '<rootDir>/src/test/doubles'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [`${baseDir}/**/*.ts`],
  testMatch: [`${baseTestDir}/**/*.test.ts`],
}

export default config