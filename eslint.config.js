import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "eslint-config-prettier";
import prettierPugin from "eslint-plugin-prettier";
import globals from "globals";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
      prettier: prettierPugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      "import/order": ["error", { alphabetize: { order: "asc" } }],
      "import/no-unresolved": "error",
      "import/no-duplicates": "error",
      "prettier/prettier": "error",
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      indent: ["error", 2],
      quotes: ["error", "double"],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];
