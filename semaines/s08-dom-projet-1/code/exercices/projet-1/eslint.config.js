// ESLint configuration for project #1: browser code (the page) and Node code (the tests).
// Recommended rules + the style expected in this course: === only, const/let, no var.
// Function parameters not used yet are allowed: the starter files declare functions you complete.
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  js.configs.recommended,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      eqeqeq: 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'no-unused-vars': ['error', { args: 'none' }],
    },
  },
]);
