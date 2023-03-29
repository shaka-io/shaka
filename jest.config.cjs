/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const { resolve, join } = require("path");
const { lstatSync, readdirSync } = require("fs");
const scope = `@shaka-js`
const directory = resolve(__dirname, `packages`);
const list = readdirSync(directory).filter((read) =>
  lstatSync(join(directory, read)).isDirectory()
);

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ["dotenv/config"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest",
    ...list.reduce(
      (acc, name) => ({
        ...acc,
        [`${scope}/${name}(.*)$`]: `<rootDir>/packages/./${name}/src/$1`,
      }),
      {}
    ),
  },
  modulePathIgnorePatterns: [
    "__local__",
    "__edit__",
    ...list.reduce(
      (acc, name) => [...acc, `<rootDir>/packages/${name}/lib`,],
      []
    ),
  ],
  testTimeout: 40000
};