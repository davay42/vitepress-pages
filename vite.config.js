import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import { generatePages } from "./src";


export default defineConfig({
  plugins: [
    vue(),
    Pages(generatePages({
      dirs: [
        { dir: "pages", baseRoute: "pages" },
      ]
    })),
  ],
  build: {
    lib: {
      entry: "src/index.js",
      name: "pages",
      formats: ["es", "cjs"],
    },
    sourcemap: true,
    rollupOptions: {
      output: {
        minifyInternalExports: false,
      },
    },
  },
});


