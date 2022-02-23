module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  parserOptions: {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    "@typescript-eslint/no-use-before-define": "off",
    "max-len": ["error", { "code": 140, "ignoreUrls": true }],
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/no-unescaped-entities": [
      "error",
      {
        "forbid": [{ "char": ">", "alternatives": ["&gt;"] }, { "char": "}", "alternatives": ["&#125;"] }]
      }
    ],
  },
};
