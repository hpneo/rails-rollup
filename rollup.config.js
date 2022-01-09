import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";

export default {
  input: "app/javascript/application.js",
  output: {
    file: "app/assets/builds/application.js",
    format: "es",
    inlineDynamicImports: true,
    sourcemap: true,
  },
  plugins: [
    resolve({ browser: true }),
    babel({ babelHelpers: "bundled" }),
    postcss({
      plugins: [],
    }),
  ],
};
