export const env = {
  browser: true,
  es2021: true,
}
export const extend = [
  'plugin:react/recommended',
  'airbnb',
  'plugin:@typescript-eslint/recommended',
  'prettier/@typescript-eslint',
  'plugin:prettier/recommended',
]
export const parser = '@typescript-eslint/parser'
export const parserOptions = {
  ecmaFeatures: {
    jsx: true,
  },
  ecmaVersion: 12,
  sourceType: 'module',
}
export const plugins = [
  'prettier',
  'react',
  '@typescript-eslint',
]
export const rules = {
  semi: ['error', 'never'],
  'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
  'react/jsx-props-no-spreading': 'off',
  "react/prop-types": "off",
  "@typescript-eslint/explicit-function-return-type": "off",
  "prettier/prettier": "error",
  "@typescript-eslint/interface-name-prefix": "off",
  "@typescript-eslint/no-explicit-any": "off",
  "@typescript-eslint/ban-ts-ignore": "off",
  "react/react-in-jsx-scope": "off",
}
export const globals = { React: "writable" }
