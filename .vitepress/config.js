import { defineConfig } from "vitepress";

import generateMeta from '../src/head'
import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'

const links = []

export const meta = {
  title: "Vitepress-pages",
  description: "Navigation generation for Vitepress",
  site: "vitepress-pages.defucc.me",
  url: "https://vitepress-pages.defucc.me/",
  repo: "https://github.com/davay42/vitepress-pages",
  mediaFolder: "media_files",
  locale: "ru",
  icon: "",
  logo: "",
  image: "",
  color: "#CCCCCC",
  author: "davay42",
  tags: "vitepress, vite, vue, markdown, js, digital garden",
  umamiScript: "https://stats.defucc.me/umami.js",
  umamiId: "5d35de7c-0ec7-48ea-b8cd-5934c4486a6d",
};



export default defineConfig({
  title: meta.title,
  description: meta.description,
  lang: meta.locale,
  outDir: "docs",
  themeConfig: {
    repo: meta.repo,
    logo: null,
    color: meta.color
  },
  transformHead: generateMeta(meta),
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        // you might need to change this if not using clean urls mode
        url: pageData.relativePath?.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData?.lastUpdated,
        changefreq: 'weekly'
      })
  },
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({ hostname: meta.url })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
    await new Promise((r) => writeStream.on('finish', r))
  }
});
