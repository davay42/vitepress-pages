Ever thought about using [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) with [vitepress](https://vitepress.vuejs.org/?

Automatially generated SSR routes directly from `md` pages. `vitepress-pages` is an extension for `vite-plugin-pages` to parse all the folders, add the frontmatter to the pages array and eben treat some special media fields as images to optimize and utiliae in your theme.

## Installation

```bash
pnpm i vitepress-pages
```

## Configuration

`vite.config.js`

```js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import generateSitemap from "vite-plugin-pages-sitemap";
import { extendRoutes } from "vitepress-pages";

export default defineConfig({
  plugins: [
    vue(),
    Pages({
      dirs: [{ dir: ".", baseRoute: "." }],
      extensions: ["md"],
      ...extendRoutes(),
      onRoutesGenerated: (routes) =>
        generateSitemap({ routes, hostname: "http://localhost/" }),
    }),
  ],
});
```

## Usage

You can import the list of all routes from `~pages` anywhere in the app. We provide basic of functions at `vitepress-pages/browser` to navigate them easily.

```js
import { useRoute } from "vitepress";

const route = useRoute(); // current page route

import {
  getPage,
  getPages,
  getParents,
  getSiblings,
  trailSlash, // Vitepress omits ending slashes, you may need to add it for consistent paths
} from "vitepress-pages/browser";

import routes from "~pages"; // all routes list from `vite-plugin-pages`

const pages = getPages(routes); // hierarchical structure of the pages
const page = getPage(route.path, routes); // current page info
const siblings = getSiblings(route.path, routes); // { prev, next }
const parents = getParents(route.path, routes); // An array of parents starting from the root
```
