import resolve from "@rollup/plugin-node-resolve"
import postcss from 'rollup-plugin-postcss'

export default {
  input: "app/javascript/application.js",
  output: {
    file: "app/assets/builds/application.js",
    format: "es",
    inlineDynamicImports: true,
    sourcemap: true
  },
  plugins: [
    resolve(),
    postcss({
      plugins: []
    })
  ]
}
