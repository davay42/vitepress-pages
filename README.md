### File system based routing for [`vitepress`](https://vitepress.vuejs.org/) digital gardening

![](https://img.shields.io/npm/v/vitepress-pages?color=%23eee&style=for-the-badge)

A Vitepress extension for automatic navigation generation given any `markdown` data collection.

## What does it do?

It helps you generate navigation data: page hierarchy, parents, siblings and children for any given page using Vitepress built-in functionality.

### In Node.JS

You first get a list of all markdown pages via the `createContentLoader` in a `pages.data.js` file and use the provided `transformPages()` function to go through the raw routes to optimize all the used `mediaTypes` images and copy them to the `publicFolder` folder.

### In browser

You can use the `usePages`, `useChildren`, `useParents`, `useSiblings` to get reactive `computed` values to build your own navigation interfaces.


Tech used:

- [sharp](https://github.com/lovell/sharp) for image resizing.

## Installation

Add `vitepress-pages` as a dependency to your project (not a devDependency as we'll need `vitepress-pages/browser` functions on client too)

```bash
pnpm i vitepress-pages
```

## How to use

1. Put your `*.data.js` to the root folder of your digital garden.

`pages.data.js`

```js
// We use the new Vitepress loaders feature https://vitepress.dev/guide/data-loading
import { createContentLoader } from 'vitepress'

// import the main transformer factory
import { transformPages } from 'vitepress-pages'

import url from 'url'

// export the content data-loader for your markdown files folder
export default createContentLoader('./**/*/*.md', {
  
  //transform pages: optimize images
  transform: transformPages({
    
    //we need the root path to be precise about placing the media files
    root: url.fileURLToPath(new URL('./', import.meta.url)),
    
    // what frontmatter fields to consider as images to be saved to public folder
    mediaTypes: {
      cover: { size: 1200, height: 1000, fit: "inside" },
    }

  })
})
```

## Options

You can customize the `transformPages` call with these options.

```js
transformPages({

  // Mandatory field
  root: url.fileURLToPath(new URL('../', import.meta.url)),
  
  // Where are static files stored?
  publicFolder: "public",
  
  // Where to put the optimized images?
  mediaFolder: 'media_files',

  // What fields in the frontmatter contain pictures to optimize. Usually 'cover' and/or 'icon'
  mediaTypes: { cover: { size: 1200, height: 1000, fit: "inside" } }
})
```

## Usage

2. You can use the `usePages()` function in your [Vitepress extended default theme layout](https://vitepress.dev/guide/extending-default-theme#extending-the-default-theme) to have all the navigation primitives you need: parents, siblings and children.

`.vitepress/theme/MyLayout.vue`

```vue
<script setup>

// Default theme layout to extend
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme

// Package functions to use
import { usePages, cleanLink } from 'vitepress-pages/browser';

// The way to react to route changes
import { useRoute } from 'vitepress'

// Build-time data-loader
import { data } from '../../pages.data.js'

// Component to display pages in a list
import NavCard from './NavCard.vue';

// Composable to process route and data and return reactive computed lists of pages
const { children, parents, siblings } = usePages(useRoute(), data)
</script>

<template>
  <Layout>
    
    <!-- Extending the default layout - put parents list right into the nav bar -->
    <template #nav-bar-title-after>
      <nav id="parents" class="grid">
        <a v-for="parent in parents.slice(0, -1)" :key="parent.url" class="parent" :href="cleanLink(parent.url)">
          {{ parent.frontmatter?.title }}
        </a>
      </nav>
    </template>

    <!-- This block goes right after the page text -->
    <template #doc-after>

      <!-- Children list -->
      <nav id="children" class="grid">
        <NavCard v-for="child in children" :key="child.url" :page="child" class="child">
        </NavCard>
      </nav>

      <!-- Siblings pair -->
      <nav id="siblings" class="grid">
        <template v-for="sb in ['prev', 'next']" :key="sb">
          <NavCard v-if="siblings?.[sb]" :page="siblings?.[sb]" class="sibling">
          </NavCard>
        </template>
      </nav>

    </template>
  </Layout>
</template>
```

## Display

Your card for displaying pages can be any level of complexity. Here's a basic one for you to build upon.

```vue
<script setup>
const props = defineProps({
  page: { type: Object, default: () => ({}) }
})
</script>

<template>
  <a v-if="page" :href="page?.url" :style="{ background: `url(${page?.frontmatter?.cover})` }">
    <div>
      <slot></slot>
      <h3>{{ page?.frontmatter?.title }}</h3>
      <h4>{{ page?.frontmatter?.description }}</h4>
    </div>
  </a>
</template>
```

Stay creative!
