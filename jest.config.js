module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: ["src/**/*.ts*"],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
};
