import js from "@eslint/js"
import globals from "globals"
import { defineConfig } from "eslint/config"

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      "no-var": "error",
      "prefer-const": "warn",
      "no-unused-vars": "warn"
    }
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs"
    }
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.node
    }
  },
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest
      }
    }
  }
])
