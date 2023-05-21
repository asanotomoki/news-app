// lint-staged.config.js
module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'prettier --write',
    'eslint --cache --config .eslintrc.pre-commit.js --fix --quiet',
  ]
};