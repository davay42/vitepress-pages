import { defineConfig } from "vitepress";

import Pages from "vite-plugin-pages";
import generateSitemap from 'vite-plugin-pages-sitemap'
import { extendRoutes } from "../src";

export default defineConfig({
  base: './',
  title: 'Vitepress pages',
  description: 'Extend your page data and parse images',
  lang: 'en',
  outDir: "docs",
  themeConfig: {
    repo: "",
    logo: null,
    color: "#ccc"
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 300000,
    },

    plugins: [
      Pages({
        dirs: [
          { dir: ".", baseRoute: "." },
          { dir: "pages", baseRoute: "pages" },
        ],
        exclude: ['**/node_modules/**/*.*', '**/README.md'],
        extensions: ['md'],
        ...extendRoutes(),
        onRoutesGenerated: routes => (generateSitemap({ routes, hostname: 'http://localhost/' })),
      }),

    ],

  },
});
