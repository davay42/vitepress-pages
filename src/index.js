import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import sharp from "sharp";

export function generatePages({
  dirs = [{ dir: "pages", baseRoute: "pages" }],
  excerpt_separator = "---",
  mediaFolder = "media_files",
  publicMedia = {
    icon: { width: 300, height: 300, fit: "inside" },
    cover: { size: 1200, height: 800, fit: "inside" },
  },
  extensions = ["md"],
} = {}) {
  function extendRoute(route) {
    const pageDir = path.resolve(route.component.substring(1));
    const frontmatter = matter.read(pageDir, {
      excerpt: true,
      excerpt_separator,
    });
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
        const url = path.join("/", mediaFolder, media, fileName);

        page[media] = url;

        if (!fs.existsSync(publicPath)) {
          fs.mkdirSync(publicPath, {
            recursive: true,
          });
        }

        if (filePath.endsWith(".svg")) {
          fs.copyFileSync(
            path.resolve(filePath.substring(1)),
            path.join(publicPath, fileName)
          );
        } else {
          sharp(path.resolve(filePath.substring(1)))
            .resize({
              width: media == "icon" ? 300 : 1200,
              height: media == "icon" ? 300 : 1200,
              fit: "inside",
            })
            .toFile(path.join(publicPath, fileName), (err, info) => {
              if (err) {
                console.log(err, filePath);
              }
            });
        }
      }
    }
    return page;
  }
  return {
    dirs,
    extensions,
    extendRoute,
  };
}
