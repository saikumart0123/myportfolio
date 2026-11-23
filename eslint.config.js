import js from '@eslint/js'
import hooks from 'eslint-plugin-react-hooks'
import globals from 'globals'

export default [
  { ignores: ['dist/**'] },
  js.configs.recommended,
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: { globals: globals.browser, parserOptions: { ecmaFeatures: { jsx: true } } },
    plugins: { 'react-hooks': hooks },
    rules: { ...hooks.configs.recommended.rules, 'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z]' }] },
  },
]
