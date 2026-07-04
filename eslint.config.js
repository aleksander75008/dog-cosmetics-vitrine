import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

/**
 * ESLint v9 flat-config array.
 *
 * Entry 3 spreads reactHooksPlugin.configs['recommended'] as its own
 * standalone object so that both the `plugins` key AND the `rules` key
 * are registered together — pulling out only `.rules` silently drops the
 * plugin registration and causes "Definition for rule react-hooks/rules-of-hooks
 * was not found" at lint time.
 */
export default [
  // 1. ESLint core recommended rules
  js.configs.recommended,

  // 2. React plugin — JSX + browser globals
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react: reactPlugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },

  // 3. React Hooks — spread the entire recommended config array directly into
  //    the top-level array so each entry (with its `plugins` + `rules` keys)
  //    is registered as a standalone flat-config object. Wrapping in another
  //    object literal would spread array indices as numeric keys, which ESLint
  //    rejects with exit code 2.
  ...reactHooksPlugin.configs['recommended'],

  // 4. Ignore build output and config artefacts
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
];
