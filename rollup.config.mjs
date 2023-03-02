/* eslint-disable import/no-extraneous-dependencies */
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import terser from "@rollup/plugin-terser";
import copy from "rollup-plugin-copy";
import image from "@rollup/plugin-image";

// noinspection JSUnusedGlobalSymbols
export default {
  input: "src/index.ts",
  output: {
    // Using commonjs since they can also be `import`ed.
    format: "cjs",
    dir: "dist",
    sourcemap: true,
    name: "mesha-components",
    // preserveModules: true
  },
  plugins: [
    del({ targets: "dist/*", verbose: true }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      exclude: ["**/*.stories.tsx", "./src/shared/**/*.*"],
    }),
    postcss({
      extensions: [".css"],
      extract: "styles/index.css",
    }),
    image(),
    terser(),
    copy({
      targets: [
        { src: "./src/styles/colors.module.scss", dest: "dist/styles" },
      ],
    }),
  ],
};
