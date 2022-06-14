module.exports = {
  extends: ['plugin:prettier/recommended'],
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/jsx-uses-vars': 'error',
  },
  ignorePatterns: ['*.config.js'],
};
