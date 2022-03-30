### File system based routing for [`vitepress`](https://vitepress.vuejs.org/) digital gardening

[`vitepress-pages`](https://www.npmjs.com/package/vitepress-pages) is a [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) extension for automatic routes generation out of any `markdown` data collection.

## What does it do?

### In Node

- Scans your project folder structure
- Traverses all `index.md` files
- Parses frontmatter
- Optimizes media files
- Creates client-side interface for us to use in our

### In browser

- Gives you access to the routes array
- Recreates hierarchical folder tree structure for navigation and search
- Generates parents list for any given page
- Finds previous and next siblings along with the index of current page in the list and the total number of pages in it

Tech used:

- [graymatter](https://github.com/jonschlinkert/gray-matter) for parsing markdown files. We copy all the frontmatter, generate excerpt and have a flag for empty content. We don't load all the file contents in order to keep the list light enough even for quite big sites.

  You can force load contents with a flag `type: block` put into your `index.md` frontmatter

- [sharp](https://github.com/lovell/sharp) for image resizing.

## Installation

```bash
npm i -D vite-plugin-pages vite-plugin-pages-sitemap
npm i vitepress-pages
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
        mediaFolder: "media_files", // the name of a folder inside your /public/ to put all the optimized images to
        mediaTypes: { // what frontmatter fields should be considered as images and how should sharp deal with them
          icon: { width: 300, height: 300, fit: "inside" },
          cover: { size: 1200, height: 800, fit: "inside" },
        },
      })
}
```

## Usage

You can import the list of all routes from `~pages` anywhere in the app. We provide basic of functions at `vitepress-pages/browser` to navigate them easily.

`composables/pages.js`

```js
import routes from "~pages"; // all routes list from `vite-plugin-pages`
import {
  getPage,
  getPages,
  getParents,
  getSiblings,
} from "vitepress-pages/browser";

const pages = getPages(routes); // hierarchical structure of the pages

const usePage = (path) => getPage(path, routes); // current page data object
const useParents = (path) => getParents(path, routes); // An array of parent routes starting from the root
const useSiblings = (path) => getSiblings(path, routes); // { prev, next, index, total }

export { routes, pages, usePage, useParents, useSiblings };
```

## Display

The last step is to create some [Vue 3](https://vuejs.org) components to display all the data. You can import any of the functions and use them with current (or another) route path.

`<script setup>`

```js
import {
  pages,
  usePage,
  useSiblings,
  useParents,
} from "@theme/composables/pages";

import { useRoute } from "vitepress";
const route = useRoute();

const page = computed(() => usePage(route.paths));
const siblings = computed(() => useSiblings(route.path));
const parents = computed(() => useParents(route.path));
const children = computed(() => pages[route.path]);
```

`<template>`

Be creative!

```html
<section v-for="page in pages" :key="page">
  <img :src="page.cover" />
  <h2>{{ page.title }}</h2>
  <p>{{ page.subtitle }}</p>
  <h3 v-for="child in pages[page.path]" :key="child">{{ child.title }}</h3>
</section>
```
