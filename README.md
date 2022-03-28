Ever thought on using `vite-plugin-pages` with `vitepress`? Automatially generated SSR routes directly from `md` pages. Here's a config generator for the plugin to parse all the folders, add the frontmatter to the pages array and eben treat some special media fields as images to optimize and utiliae in your theme.

## Installation

```bash
pnpm i -D vitepress-pages
```

## Usage

`vite.config.js`

```js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import generateSitemap from "vite-plugin-pages-sitemap";
import { extendRoutes } from "./src";

export default defineConfig({
  plugins: [
    vue(),
    Pages({
      dirs: [{ dir: "pages", baseRoute: "pages" }],
      extensions: ["md"],
      ...extendRoutes(),
      onRoutesGenerated: (routes) =>
        generateSitemap({ routes, hostname: "http://localhost/" }),
    }),
  ],
});
```
