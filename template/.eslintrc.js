module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
          jsx: true,
      },
  },
  extends: [
      '@react-native-community',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'prettier',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      'jest/no-disabled-tests': 'off',
      '@typescript-eslint/camelcase': 0,
      '@typescript-eslint/no-var-requires': 0,
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error'],
      // 'semi': 0,
      // 'no-unused-vars': 'off',
      // '@typescript-eslint/no-unused-vars': 'error'
  },
  overrides: [
      {
          // enable the rule specifically for TypeScript files
          files: ['*.ts', '*.tsx'],
          rules: {
              '@typescript-eslint/explicit-function-return-type': ['error'],
          },
      },
  ],
}
