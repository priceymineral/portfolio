const {defaults} = require('jest-config')
/* @type {import('jest').Config} */

const config = {
    verbose: true,
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts', 'cts'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '\\.css$': 'some-css-transformer',
      },
  }
// const config = {
//     verbose: true,
//     moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts', 'cts'],
//     collectCoverageFrom: [
//         '**/*.{js,jsx}',
//         '!**/node_modules/**',
//         '!**/vendor/**',
//       ],
//       transform: {
//         '\\.[jt]sx?$': 'babel-jest',
//         '\\.css$': 'some-css-transformer',
//       },
//   }
  
export default config