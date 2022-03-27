import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import generateSitemap from 'vite-plugin-pages-sitemap'
import { generatePages } from "./src";


export default defineConfig({
  plugins: [
    vue(),
    Pages({
      ...generatePages({
        dirs: [
          { dir: "pages", baseRoute: "pages" },
        ]
      }),
      onRoutesGenerated: routes => (generateSitemap({ routes, hostname: 'http://localhost/' })),
    }),
  ],
});


