import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import sharp from 'sharp'


export function generatePages({
  dirs = [{ dir: 'pages', baseRoute: 'pages' }],
  mediaFolder = 'media_files',
  publicMedia = {
    icon: { width: 300, height: 300, fit: 'inside' },
    cover: { size: 1200, height: 800, fit: 'inside' }
  },
  extensions = ["md"],
} = {}) {

  function extendRoute(route) {
    const pageDir = path.resolve(route.component.substr(1));
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

    for (let media in publicMedia) {
      if (data[media]) {
        let file = data[media];
        const filePath = path.join(route.path, file);
        const fileName = filePath.split("/").filter(Boolean).join("-");
        const publicPath = path.resolve("public", mediaFolder, media);
        const url = path.join("/", mediaFolder, media, fileName)

        page[media] = url;

        if (!fs.existsSync(publicPath)) {
          fs.mkdirSync(publicPath, {
            recursive: true,
          });
        }

        sharp(path.resolve(filePath.substr(1)))
          .resize({
            width: publicMedia[media].width,
            height: publicMedia[media].height,
            fit: publicMedia[media].fit
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
  }
}