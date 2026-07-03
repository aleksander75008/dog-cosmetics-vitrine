import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default [
  // 1. ESLint core recommended rules
  js.configs.recommended,

  // 2. React flat-config recommended (v7.35+ export — avoids legacy wrapper keys)
  reactPlugin.configs.flat.recommended,

  // 3. React Hooks recommended — spread as standalone array entry so the
  //    `plugins` key is registered alongside `rules` (fixes MEDIUM finding)
  ...reactHooksPlugin.configs['recommended'],

  // 4. Project-level overrides
  {
    files: ['src/**/*.{js,jsx}'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Relax prop-types requirement — we use JSDoc instead
      'react/prop-types': 'off',
    },
  },

  // 5. Ignore build artefacts and config files at root
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
];
