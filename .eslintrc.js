module.exports = {
  extends: ['@up-line/eslint-config'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['~', './assets/']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
