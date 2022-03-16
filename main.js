import fs from "node:fs";
import path from "node:path";
import appRoot from "app-root-path";
import matter from "gray-matter";
import sharp from 'sharp'
import generateSitemap from 'vite-plugin-pages-sitemap'

const root = appRoot.toString();


export function generatePages({
  dirs = [{ dir: 'pages', baseRoute: '/' }],
  mediaFolder = 'media_files',
  publicMedia = ['icon', 'cover'],
  hostname = 'https://defucc.me',
  extensions = ["md"],
} = {}) {

  function extendRoute(route) {
    const pageDir = path.join(root, route.component);
    const frontmatter = matter.read(pageDir, { excerpt: true });
    const { data, excerpt, content } = frontmatter;
    const page = {
      ...route,
      ...data,
      excerpt,
      empty: !content,
    };

    if (data.type == "block") {
      page.content = content;
    }

    for (let media of publicMedia) {
      if (data[media]) {
        let file = data[media];
        const filePath = path.join(route.path, file);
        const fileName = filePath.split("/").filter(Boolean).join("-");
        const publicPath = path.join(root, "public", mediaFolder, media);
        const url = path.join("/", mediaFolder, media, fileName)

        page[media] = url;

        if (!fs.existsSync(publicPath)) {
          fs.mkdirSync(publicPath, {
            recursive: true,
          });
        }

        sharp(path.join(root, filePath))
          .resize({
            width: media == 'icon' ? 300 : 1200,
            height: media == 'icon' ? 300 : 1200,
            fit: 'inside'
          })
          .toFile(path.join(publicPath, fileName), (err, info) => {
            if (err) {
              console.log(err, filePath)
            }
          })

      }
    }

    return page;
  }
  return {
    dirs,
    extensions,
    extendRoute,
    onRoutesGenerated: routes => (generateSitemap({ routes, hostname })),
  }
}