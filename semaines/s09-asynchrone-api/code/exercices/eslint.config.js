// ESLint configuration for the week 9 exercises: browser code (the pages) and Node code (the tests).
// Recommended rules + the style expected in this course: === only, const/let, no var.
// Function parameters not used yet are allowed: the starter files declare functions you complete.
// An error caught and not used (catch (error) { return []; }) is allowed too: the course always writes catch (error).
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
      'no-unused-vars': ['error', { args: 'none', caughtErrors: 'none' }],
    },
  },
]);
