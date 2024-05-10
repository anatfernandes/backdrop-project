module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "linebreak-style": ["error", "unix"],
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "no-unused-vars": "error",
    "comma-spacing": ["error", { before: false, after: true }],
    "semi-spacing": ["error", { before: false, after: true }],
    "object-curly-spacing": ["error", "always"],
    "space-before-blocks": ["error", "always"],
    "@typescript-eslint/type-annotation-spacing": ["error", { after: true, before: false }],
    "arrow-spacing": ["error", { before: true, after: true }],
    "no-cond-assign": ["error", "always"],
    "no-console": "warn",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: false,
        },
      },
    ],
    "max-len": [
      "error",
      {
        code: 100,
        ignoreUrls: true,
        ignoreStrings: false,
        ignoreComments: false,
        ignoreTrailingComments: false,
      },
    ],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      },
    ],
  },
};
