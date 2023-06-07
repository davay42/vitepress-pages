### File system based routing for digital gardening with [`Vitepress`](https://vitepress.vuejs.org/)

![](https://img.shields.io/npm/v/vitepress-pages?color=%23eee&style=for-the-badge)

A Vitepress extension for automatic navigation generation for any `markdown` data collection.

> This is `vitepress-pages` v.2.0 documentation, which is suitable for Vitepress v.1.0-beta.1 and higher. For v.1.0 docs go https://www.npmjs.com/package/vitepress-pages/v/1.0.5

## What does it do?

It helps you generate navigation data: page hierarchy, parents, siblings and children for any given page using Vitepress built-in functionality.

### In browser

Import the `usePages`, `useChildren`, `useParents` or `useSiblings` from `vitepress-pages` and get reactive `computed` values to build your own navigation interface.

### In Node.JS

With Vitepress 1.0 we got the [build-time data loading](https://vitepress.dev/guide/data-loading) that give a list of all markdown pages with a `glob` pattern with the `createContentLoader` within special `*.data.js` files.

You can use the `vitepress-pages/media` default export function to go through the raw routes to optimize all the used `mediaTypes` images and copy them to the `publicFolder/mediaFolder` path. The script will take an image path relative  to a given the `.md` file, optimize it with [sharp.js](https://github.com/lovell/sharp) and change the frontmatter media URL to match the new static image location. This is really helpful to generate have illustrated blogs and much more.

## Installation

Add `vitepress-pages` as a dependency to your project.

```bash
pnpm i vitepress-pages
```

## How to use

1. Put a `*.data.js` to the root folder of your digital garden.

`pages.data.js`

```js
// We use the new Vitepress loaders feature https://vitepress.dev/guide/data-loading
import { createContentLoader } from 'vitepress'

// import the main transformer factory
import VPMedia from 'vitepress-pages/media'

// export the content data-loader for your markdown files folder
export default createContentLoader('./**/*/*.md', {
  
  //transform pages: optimize images
  transform: VPMedia({
    
    //we need the root path to be precise about placing the media files
    root: new URL('./', import.meta.url),
    
    // what frontmatter fields to consider as images to be saved to public folder
    mediaTypes: {
      cover: { size: 1200, height: 1000, fit: "inside" },
    }

  })
})
```

## Options

You can customize the `VPMedia` call with these options.

```js
VPMedia({

  // Mandatory field
  root: new URL('../', import.meta.url),
  
  // Where are static files stored?
  publicFolder: "public",
  
  // Where to put the optimized images?
  mediaFolder: 'media_files',

  // What fields in the frontmatter contain pictures to optimize. The most useful are 'cover', 'icon', 'avatar', 'logo'. 
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
import { usePages, cleanLink } from 'vitepress-pages';

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
