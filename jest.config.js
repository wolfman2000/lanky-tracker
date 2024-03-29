module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@renderer/(.*)': '<rootDir>/src/renderer/src/$1'
  },
  transform: {
    '^.+\\.(ts|tsx)$': [`ts-jest`, { tsconfig: 'tsconfig.web.json' }]
  },
  coverageReporters: ['json', 'lcov', ['text', { skipFull: true }]]
}
