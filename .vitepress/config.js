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
    repo: "https://github.com/davay42/vitepress-pages",
    logo: null,
    color: "#ccc"
  },
  vite: {
    plugins: [
      Pages({
        dirs: [
          { dir: ".", baseRoute: "." },
        ],
        exclude: ['**/node_modules/**/*.*', '**/!(index).md'],
        extensions: ['md'],
        ...extendRoutes(),
        onRoutesGenerated: routes => (generateSitemap({ routes, hostname: 'http://localhost/' })),
      }),
    ],
  },
});
