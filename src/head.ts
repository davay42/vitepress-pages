export default function (metaData: {
  title: string,
  description: string,
  site?: string,
  url?: string,
  repo?: string,
  mediaFolder?: string,
  locale?: string,
  icon?: string,
  logo?: string,
  image?: string,
  color?: string,
  author?: string,
  tags?: string,
  umamiScript?: string,
  umamiId?: string,
}

) {
  return function transformHead(ctx) {
    const url = ctx.pageData.relativePath.split('index.md')[0]
    let image = metaData?.image
    if (ctx.pageData.frontmatter?.cover) {
      image = `${metaData.mediaFolder}/cover/${url.split('/').join('-') + ctx.pageData.frontmatter?.cover}`
    }
    return [

      process.env.NODE_ENV === "production" && metaData.umamiId ? ["script", { async: true, defer: true, "data-website-id": metaData.umamiId, src: metaData.umamiScript }] : null,

      ["link", { rel: "icon", type: "image/svg+xml", href: metaData.icon }],

      ["meta", { property: "og:type", content: "website" }],
      ["meta", { property: "og:site", content: metaData.site }],
      ["meta", { property: "og:site_name", content: metaData.title }],
      ['meta', { property: 'og:title', content: `${ctx.pageData.title} | ${metaData.title}` }],
      ['meta', { property: 'og:description', content: ctx.pageData.description }],
      ['meta', { property: 'og:url', content: metaData.url + url }],
      ['meta', { property: 'og:image', content: metaData.url + image }],
      ["meta", { property: "og:locale", content: metaData.locale }],

      ['meta', { name: 'twitter:title', content: `${ctx.pageData.title} | ${metaData.title}` }],
      ['meta', { name: 'twitter:description', content: ctx.pageData.description }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:site', content: `@${metaData.author}` }],
      ['meta', { name: 'twitter:creator', content: `@${metaData.author}` }],
      ['meta', { name: 'twitter:image', content: metaData.url + image }],

      ["meta", { name: "author", content: metaData?.author }],
      ["meta", { name: "keywords", content: metaData?.tags }],
      ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "white-translucent", },],
      ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
      ["meta", { name: "HandheldFriendly", content: "True" }],
      ["meta", { name: "MobileOptimized", content: "320" }],
      ["meta", { name: "theme-color", content: metaData.color }],
    ]
  }
}