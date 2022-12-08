module.exports = {
  env: {
    es6: true,
    node: true,
    "googleappsscript/googleappsscript": true
  },
  extends: ["standard", "eslint:recommended", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    GoogleAppsScript: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2016
  },
  plugins: ["@typescript-eslint", "googleappsscript"],
  ignorePatterns: ["build/index.js"],
  rules: {
    complexity: ["error", 10],
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"]
  }
};
