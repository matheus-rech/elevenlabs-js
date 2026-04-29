/** @type {import('jest').Config} */
export default {
    testEnvironment: "node",
    projects: [
        {
            displayName: "unit",
            transform: {
                "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.test.json" }],
            },
            testEnvironment: "node",
            moduleNameMapper: {
                "^(\.{1,2}/.*)\.js$": "$1",
            },
            roots: ["<rootDir>/tests"],
            testPathIgnorePatterns: ["\.browser\.(spec|test)\.[jt]sx?$", "/tests/wire/"],
            setupFilesAfterEnv: [],
        },
        {
            displayName: "browser",
            transform: {
                "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.test.json" }],
            },
            testEnvironment: "<rootDir>/tests/BrowserTestEnvironment.ts",
            moduleNameMapper: {
                "^(\.{1,2}/.*)\.js$": "$1",
            },
            roots: ["<rootDir>/tests"],
            testMatch: ["<rootDir>/tests/unit/**/?(*.)+(browser).(spec|test).[jt]s?(x)"],
            setupFilesAfterEnv: [],
        },
        ,
        {
            displayName: "wire",
            preset: "ts-jest",
            testEnvironment: "node",
            moduleNameMapper: {
                "^(\.{1,2}/.*)\.js$": "$1",
            },
            roots: ["<rootDir>/tests/wire"],
            setupFilesAfterEnv: ["<rootDir>/tests/mock-server/setup.ts"],
        },
    ],
    workerThreads: false,
    passWithNoTests: true,
};
