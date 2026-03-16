/**
 * ESLint configuration using Google JavaScript Style Guide
 * Explicitly extends eslint-config-google
 * Reference: https://github.com/google/eslint-config-google
 * Style Guide: https://google.github.io/styleguide/jsguide.html
 */

import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';
import {FlatCompat} from '@eslint/eslintrc';
import {fileURLToPath} from 'url';
import {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  {
    ignores: ['dist/**', 'build/**', 'node_modules/**'],
  },
  // Explicitly extends Google JavaScript Style Guide (eslint-config-google)
  ...compat.extends('google'),
  // Disable rules removed in ESLint 9 that were part of eslint-config-google
  {
    rules: {
      'valid-jsdoc': 'off',
      'require-jsdoc': 'off',
    },
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react': react,
    },
    rules: {
      // === Google JavaScript Style Guide (eslint-config-google) ===
      // Base rules inherited from compat.extends('google') above.
      // Overrides/additions below:

      // Code formatting (following Google style)
      'indent': ['error', 2, {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: {parameters: 1, body: 1},
        FunctionExpression: {parameters: 1, body: 1},
        CallExpression: {arguments: 1},
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
      }],
      'quotes': ['error', 'single', {
        avoidEscape: true,
        allowTemplateLiterals: true,
      }],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'max-len': ['error', {
        code: 80,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      }],

      // Spacing rules (Google style)
      'comma-spacing': ['error', {before: false, after: true}],
      'key-spacing': ['error', {beforeColon: false, afterColon: true}],
      'keyword-spacing': ['error', {before: true, after: true}],
      'space-before-blocks': ['error', 'always'],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': ['error'],
      'object-curly-spacing': ['error', 'never'],
      'array-bracket-spacing': ['error', 'never'],
      'computed-property-spacing': ['error', 'never'],
      'func-call-spacing': ['error', 'never'],

      // Line break rules
      'no-trailing-spaces': ['error'],
      'no-multiple-empty-lines': ['error', {max: 2, maxEOF: 1}],
      'eol-last': ['error', 'always'],

      // Variable and function declarations (Google style)
      'no-var': ['error'],
      'prefer-const': ['error'],
      'one-var': ['error', 'never'],
      'prefer-arrow-callback': ['error'],
      'arrow-spacing': ['error', {before: true, after: true}],

      // Code quality rules
      'no-unused-vars': ['error', {
        args: 'after-used',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      }],
      'no-console': ['warn'],
      'no-debugger': ['error'],
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'multi-line'],
      'no-eval': ['error'],
      'no-implied-eval': ['error'],

      // Import/Export rules
      'no-duplicate-imports': ['error'],

      // JSX and React specific rules (compatible with Google style)
      'react/jsx-uses-vars': ['error'],
      'react/jsx-uses-react': ['error'],
      'react-hooks/rules-of-hooks': ['error'],
      'react-hooks/exhaustive-deps': ['warn'],
      'react-refresh/only-export-components': ['warn', {
        allowConstantExport: true,
      }],
    },
  },
];
