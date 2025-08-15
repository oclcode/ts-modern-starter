import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";
import jestPlugin from "eslint-plugin-jest";
import importPlugin from "eslint-plugin-import";
import tseslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";

export default [
  eslint.configs.recommended,
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      globals: { ...globals.node },
      ecmaVersion: "latest",
      sourceType: "module",
      parser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      import: importPlugin,
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "import/extensions": ["error", "ignorePackages", { ts: "never" }],
      "no-restricted-syntax": [
        "error",
        {
          selector: "ForOfStatement",
          message:
            "Use Array.prototype.forEach or Array.prototype.every instead of for...of",
        },
      ],
    },
  },
  {
    files: ["tests/**/*.ts"],
    languageOptions: {
      globals: { ...globals.node, ...globals.jest },
      parserOptions: {
        project: "./tsconfig.test.json",
      },
    },
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      "import/extensions": "off", // Désactive pour les tests
      "@typescript-eslint/no-explicit-any": "off", // Optionnel : moins strict pour les tests
    },
  },
  prettierConfig,
];
