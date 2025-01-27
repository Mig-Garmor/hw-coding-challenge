import { defineConfig } from 'eslint-define-config';

// Import the Vue plugin for ESLint
import vue from 'eslint-plugin-vue';

// Import the Vue parser (required for .vue files)
import vueParser from 'vue-eslint-parser';

// Import the JSONC plugin for linting JSON files
import jsonc from 'eslint-plugin-jsonc';

// Import the JSONC parser (required for JSON files)
import jsoncParser from 'jsonc-eslint-parser';

// ESLint configuration using the flat config system
export default defineConfig([
  // Configuration block for .vue files
  {

    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      // Specify parser options to enable modern JavaScript features
      parserOptions: {
        ecmaVersion: 'latest', // Enable ECMAScript 2022 features
        sourceType: 'module', // Enable ES module support
        ecmaFeatures: {
          jsx: true, // Enable JSX syntax (optional)
        },
      },
    },

    // Register the Vue plugin to add Vue-specific linting rules
    plugins: {
      vue,
    },

    // Define rules specific to .vue files
    rules: {
      // Warn on unused variables in Vue templates
      'vue/no-unused-vars': 'warn',

      // Enforce 2 spaces for indentation in Vue templates
      'vue/html-indent': ['error', 2],

      // Limit the number of attributes per line in Vue templates
      'vue/max-attributes-per-line': [
        'warn',
        {
          singleline: 1, // Max 1 attribute for single-line elements
          multiline: 1, // Max 1 attribute per line for multi-line elements
        },
      ],

      // General ESLint rules
      'no-console': 'warn',
      'no-debugger': 'error',
      'eqeqeq': ['error', 'always'],

      // Vue-specific rules
      'vue/no-unused-vars': 'error',
      'vue/no-deprecated-slot-attribute': 'warn',
      'vue/no-deprecated-v-on-native-modifier': 'error',
      'vue/require-default-prop': 'off',
      'vue/attributes-order': 'warn',
      'vue/order-in-components': 'warn',
      'vue/this-in-template': 'error',

    },
  },
  // Configuration for JSON files
  {
    files: ['**/*.json', '**/*.jsonc'],
    plugins: { jsonc },
    languageOptions: {
      parser: jsoncParser,
    },
    rules: {
      'jsonc/indent': ['error', 2], // Enforce 2 spaces for JSON indentation
      'jsonc/no-octal-escape': 'error', // Disallow octal escapes in JSON
    },
  },

  // Configuration block for JavaScript and MJS files
  {
    files: ['**/*.{js,mjs}'],
    languageOptions: {
      // Specify parser options for JavaScript files
      parserOptions: {
        ecmaVersion: 'latest', // Enable ECMAScript 2022 features
        sourceType: 'module', // Enable ES module support
      },

      // Define global variables for browser environments
      globals: {
        browser: true,
        es2021: true,
      },
    },

    // Define general ESLint rules for these file types
    rules: {
      'no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
        },
      ],
      'eqeqeq': ['error', 'always'],  // safer comparisons
      'prefer-const': 'warn',         // encourages modern JS
      'no-var': 'error',              // encourages modern JS
      'no-console': 'warn',           // warns on console logs;
      'curly': ['error', 'all'],      // forces braces around if/while/etc.
      'indent': ['error', 2],         // enforces 2-space indentation
      'quotes': ['error', 'single'],  // forces single quotes
      'semi': ['error', 'always'],    // forces semicolons
      'max-len': ['warn', { code: 80 }], // warns if lines exceed 80 chars
    },
  },
]);
