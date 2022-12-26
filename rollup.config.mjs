import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import UglifyJS from "uglify-js";

function uglify(options = {}) {
  return {
    renderChunk(code) {
      return UglifyJS.minify(code, {
        sourceMap: {
          filename: "application.js",
          url: "application.js.map"
        }
      });
    }
  };
}

export default {
  input: "src/application.js",
  output: {
    file: "build/assets/application.js",
    format: "iife",
    name: "ApplicationController",
    sourcemap: true
  },
  plugins: [
    nodeResolve(),
    commonjs({
      include: ["node_modules/**", "src/**"]
    }),
    uglify()
  ]
};
