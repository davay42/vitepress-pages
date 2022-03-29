Ever thought about using [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) with [Vitepress](https://vitepress.vuejs.org/)?

Automatically generated SSR routes directly from `md` pages. `vitepress-pages` is an extension for `vite-plugin-pages` to parse all the folders, add the frontmatter to the pages array and even treat some special media fields as images to optimize and utilize in your theme.

We use:

- [graymatter](https://github.com/jonschlinkert/gray-matter) for parsing markdown files. We copy all the frontmatter, generate excerpt and have a flag for empty content. We don't load all the file contents in order to keep the list light enough even for quite big sites.
- [sharp](https://github.com/lovell/sharp) for image resizing.

## Installation

```bash
pnpm i vitepress-pages
```

## Configuration

`vite.config.js`

```js
import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";
import { extendRoutes } from "vitepress-pages";
import generateSitemap from "vite-plugin-pages-sitemap"; //optional;

export default defineConfig({
  plugins: [
    Pages({
      dirs: [{ dir: ".", baseRoute: "." }],
      extensions: ["md"],
      ...extendRoutes(),
      onRoutesGenerated: (routes) =>
        generateSitemap({ routes, hostname: "http://localhost/" }), //provide a hostname and generate a `sitemap.xml` in the public folder
    }),
  ],
});
```

## Options

You can customize the `extendRoutes` call with these options:

```js
{
...extendRoutes({ //these are default options
        graymatter: { // graymatter options
          excerpt: true,
          excerpt_separator: "<!-- excerpt -->",
        },
        mediaFolder: "media_files", // a folder name inside your /public/ to put all the resized images to
        mediaTypes: { // what frontmatter fields should be considered as images and how should sharp deal with them
          icon: { width: 300, height: 300, fit: "inside" },
          cover: { size: 1200, height: 800, fit: "inside" },
        },
      })
}
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
  normalize, // Vitepress omits ending slashes, you may need to add it for consistent paths
} from "vitepress-pages/browser";

import routes from "~pages"; // all routes list from `vite-plugin-pages`

const pages = getPages(routes); // hierarchical structure of the pages
const page = getPage(route.path, routes); // current page info
const siblings = getSiblings(route.path, routes); // { prev, next }
const parents = getParents(route.path, routes); // An array of parents starting from the root
```
