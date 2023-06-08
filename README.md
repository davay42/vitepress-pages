### File system based routing for digital gardening with [`Vitepress`](https://vitepress.vuejs.org/)

![](https://img.shields.io/npm/v/vitepress-pages?color=%23eee&style=for-the-badge)

A Vitepress extension for automatic navigation generation for any `markdown` data collection.

> This is `vitepress-pages` v.2.0 documentation, which is suitable for Vitepress v.1.0-beta.1 and higher. For v.1.0 docs go https://www.npmjs.com/package/vitepress-pages/v/1.0.5

## What does it do?

It helps you generate navigation data: page hierarchy, parents, siblings and children for any given page using Vitepress built-in functionality.

### In components

Import the `usePages`, `useChildren`, `useParents` or `useSiblings` from `vitepress-pages` and get reactive `computed` values to build your own navigation interface.

### In data-loaders

With Vitepress 1.0 we got the [build-time data loading](https://vitepress.dev/guide/data-loading) that give a list of all markdown pages with a `glob` pattern with the `createContentLoader` within special `*.data.js` files.

You can use the `vitepress-pages/media` default export function to go through the raw routes to optimize all the used `mediaTypes` images and copy them to the `publicFolder/mediaFolder` path. The script will take an image path relative  to a given the `.md` file, optimize it with [sharp.js](https://github.com/lovell/sharp) and change the frontmatter media URL to match the new static image location. This is really helpful to generate have illustrated blogs and much more.

### In config

There's a configurable opinionated `transformHead()` function generator to generate [per-page head tags](https://vitepress.dev/reference/site-config#transformhead). You provide a config object and get a function that will return a bunch of SEO-friendly head tags. The script adds `og:` and `twitter:` meta-tags, as well as `title`, `description` and some other to all the pages correspondingly.

## Installation

Add `vitepress-pages` as a dependency to your project.

```bash
pnpm i vitepress-pages
```

## How to use

Put a `*.data.js` to the root folder of your digital garden.

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
    
     // Mandatory field
  root: new URL('../', import.meta.url),
  
  // Where are static files stored?
  publicFolder: "public",
  
  // Where to put the optimized images?
  mediaFolder: 'media_files',

  // What fields in the frontmatter contain pictures to optimize. The most useful are 'cover', 'icon', 'avatar', 'logo'. 
  mediaTypes: { cover: { size: 1200, height: 1000, fit: "inside" } }
  })
})
```

## Usage

You can use the `usePages()` function in your [Vitepress extended default theme layout](https://vitepress.dev/guide/extending-default-theme#extending-the-default-theme) to have all the navigation primitives you need: parents, siblings and children.

`.vitepress/theme/MyLayout.vue`

```vue
<script setup>

// Default theme layout to extend
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme

// Composables to use
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

### Generate head meta-tags

`.vitepress/config.js`

```js
//import the generator 
import generateMeta from 'vitepress-pages/head'

//define options
const metaData = {
  title: "My site",
  description: "On the web",
  site: "my-site.com",
  url: "https://my-site.com/", //the end slash here is mandatory
  repo: "https://github.com/my/site",
  locale: "en",
  icon: "path/to/icon.png",
  logo: "path/to/logo.png",
  image: "path/to/image.jpg", // used for og:image, should be 1.91x1 ratio
  color: '#cccccc',
  mediaFolder: 'media_files', //where are the media files generated by `vitepress-pages/media` located
  author: "me-myself", //your twitter handle
  tags: "list, of, tags",
  // add it if you use [umami](https://umami.is/) for stats
  umamiId: "xxxxxxx-xxx-xxxxx-xxxxxxxx",
  umamiScript: "https://stats.my-site.com/umami.js"
};

// set your Vitepress config
export default defineConfig({
  title: meta.title,
  description: meta.description,
  lang: meta.locale,
  outDir: "dist",
  themeConfig: {
    repo: meta.repo,
    logo: meta.logo,
    color: meta.color
  },
  // Add this line to get head tags generated
  transformHead: generateMeta(meta)
});
```


Enjoy your digital garden being published online!
