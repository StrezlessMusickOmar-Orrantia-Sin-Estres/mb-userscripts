/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@lib/(.*)$': '<rootDir>/src/lib/$1',
    },
};
