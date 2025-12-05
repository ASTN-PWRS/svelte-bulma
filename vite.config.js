import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
//import path from "path";
//import postcss from "./postcss.config.js";
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    emptyOutDir: true,
    outDir: "dist",
    rollupOptions: {
      output: {
        assetFileNames: "css/[name][extname]", // CSSファイルの出力先を指定
        entryFileNames: "js/sveltelibs.[format].js", // JavaScriptファイルの出力先
      },
    },
    lib: {
      entry: "./src/main.js",
      name: "svelte",
      fileName: (format) => `sveltelibs.${format}.js`,
    },
  },
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
  resolve: {
    alias: {
      $css: `${__dirname}/css`,
    },
  },
});
