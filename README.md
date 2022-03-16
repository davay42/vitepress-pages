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
export default defineConfig({
  plugins: [
    Pages(generatePages({
      dirs: [{ dir: 'pages', baseRoute: '/' }], //directories to scan
      mediaFolder: 'media_files', // a folder in /public to place optimized images to
      publicMedia: ['icon', 'cover'], // frontmatter fields with images to parse
      hostname: 'https://defucc.me', // your site url for the sitemap
      extensions: ["md"], // filetypes to scan
    })),
  ]
})
```