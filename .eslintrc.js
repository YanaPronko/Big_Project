module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  root: true,
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react-hooks/recommended',
    'plugin:i18next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // project:['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  // ignorePatterns: ["**/*"],
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'react/jsx-indent-props': [
      2,
      { indentMode: 2, ignoreTernaryOperator: true },
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-props-no-spreading': 'off',
    'i18next/no-literal-string': [
      'error',
      { markupOnly: true, onlyAttribute: [''] },
    ],
    'max-len': ['error', { ignoreComments: true, code: 120 }],
    'react/state-in-constructor': ['off', 'never'],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*[.test,stories].{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
    },
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
