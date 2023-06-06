import { defineConfig } from "vitepress";

export default defineConfig({
  base: '',
  title: 'Vitepress pages',
  description: 'Extend your page data and parse images',
  lang: 'en',
  outDir: "docs",
  themeConfig: {
    repo: "https://github.com/davay42/vitepress-pages",
    logo: null,
    color: "#ccc"
  },
});
