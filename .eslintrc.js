module.exports = {
  root: true,
  settings: {
    "import/resolver": {
      node: {
        paths: ["app/javascript"],
        extensions: [".js", ".jsx", ".css"],
      },
    },
    jest: {
      version: 27,
    },
  },
  parser: "@babel/eslint-parser",
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
  extends: "preact",
};
