var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var src_exports = {};
__export(src_exports, {
  generatePages: () => generatePages
});
module.exports = __toCommonJS(src_exports);
var fs = __toESM(require("fs"));
var path = __toESM(require("path"));
var import_gray_matter = __toESM(require("gray-matter"));
var import_sharp = __toESM(require("sharp"));
function generatePages({
  dirs = [{ dir: "pages", baseRoute: "pages" }],
  excerpt_separator = "---",
  mediaFolder = "media_files",
  publicMedia = {
    icon: { width: 300, height: 300, fit: "inside" },
    cover: { size: 1200, height: 800, fit: "inside" }
  },
  extensions = ["md"]
} = {}) {
  function extendRoute(route) {
    const pageDir = path.resolve(route.component.substring(1));
    const frontmatter = import_gray_matter.default.read(pageDir, { excerpt: true, excerpt_separator });
    const { data, excerpt, content } = frontmatter;
    const page = __spreadProps(__spreadValues(__spreadValues({}, route), data), {
      excerpt,
      empty: !content
    });
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
            recursive: true
          });
        }
        (0, import_sharp.default)(path.resolve(filePath.substring(1))).resize({
          width: publicMedia[media].width,
          height: publicMedia[media].height,
          fit: publicMedia[media].fit
        }).toFile(path.join(publicPath, fileName), (err, info) => {
          if (err) {
            console.log(err, filePath);
          }
        });
      }
    }
    return page;
  }
  return {
    dirs,
    extensions,
    extendRoute
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  generatePages
});
