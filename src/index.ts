import * as url from 'url';
import * as fs from "fs";
import * as path from "path";
import sharp from "sharp";

import { cleanLink } from './browser';

export function transformPages({
  root = url.fileURLToPath(new URL('../', import.meta.url)),
  publicFolder = "public",
  mediaFolder = 'media_files',
  mediaTypes = { cover: { size: 1200, height: 1000, fit: "inside" } }
} = {
    root: url.fileURLToPath(new URL('../', import.meta.url)),
    publicFolder: "public",
    mediaFolder: 'media_files',
    mediaTypes: { cover: { size: 1200, height: 1000, fit: "inside" } }
  }) {
  return async function transform(routes) {

    for (let r in routes) {
      const page = routes[r]
      const data = page.frontmatter

      for (let media in mediaTypes) {
        if (data[media] && !data[media].includes(mediaFolder)) {
          let file = data[media];
          const filePath = path.join(cleanLink(page.url), file);
          const fileName = filePath.split("/").filter(Boolean).join("-");
          const publicPath = path.resolve(root, publicFolder, mediaFolder, media);
          const fullPath = path.join(publicPath, fileName)
          const url = path.join("/", mediaFolder, media, fileName);

          // The actual frontmatter transform is happening here
          routes[r].frontmatter[media] = url;

          if (fs.existsSync(fullPath)) {
            continue
          }

          if (!fs.existsSync(path.dirname(fullPath))) {
            fs.mkdirSync(
              path.dirname(fullPath),
              { recursive: true }
            );
          }

          if (filePath.endsWith(".svg")) {
            fs.copyFileSync(
              path.resolve(root, filePath.substring(1)),
              fullPath
            );
          } else {
            await sharp(path.resolve(root, filePath.substring(1)))
              .resize({
                width: mediaTypes[media].width,
                height: mediaTypes[media].height,
                fit: "inside",
              })
              .png({
                force: false,
                quality: 30
              })
              .jpeg({
                force: false,
                quality: 70
              })
              .toFile(fullPath, (err, info) => {
                if (err) {
                  console.log(err, filePath, info);
                }
              });
          }
        }
      }
    }

    return routes.sort((a, b) => {
      return +new Date(b.frontmatter?.date) - +new Date(a.frontmatter?.date)
    })
  }
}