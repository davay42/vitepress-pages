Ever thought on using `vite-plugin-pages` with `vitepress`? Automatially generated SSR routes directly from `md` pages. Here's a config generator for the plugin to parse all the folders, add the frontmatter to the pages array and eben treat some special media fields as images to optimize and utiliae in your theme.

## Installation

```bash
pnpm i -D vitepress-pages
```

## Usage

`vite.config.js`

```js
import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";
import generateSitemap from "vite-plugin-pages-sitemap";
export default defineConfig({
  plugins: [
    Pages({
      ...generatePages({
        dirs: [{ dir: "pages", baseRoute: "pages" }], //directories to scan
        excerpt_separator: "---", // excerpts are enabled by default
        mediaFolder: "media_files", // a folder in /public to place optimized images to
        publicMedia: {
          icon: { width: 300, height: 300, fit: "inside" },
          cover: { size: 1200, height: 800, fit: "inside" },
        }, // frontmatter fields with images to parse with sharp.js
        hostname: "https://defucc.me", // your site url for the sitemap
        extensions: ["md"], // filetypes to scan
      }),
      onRoutesGenerated: (routes) =>
        generateSitemap({ routes, hostname: "http://localhost" }),
    }),
  ],
});
```
