import type { Route, Pages } from './types'



export let pages: Pages

export function getPages(routes: Route[]) {
  if (pages) return pages
  pages = {}
  for (let route of routes) {
    if (route.path == '/') continue
    const split = route.path.split("/").slice(0, -2).join("/");
    const folder = normalize(split);
    pages[folder] = pages[folder] || [];
    pages[folder].push(route);
  }
  for (let folder in pages) {
    pages[folder].sort((a, b) => {
      if (a?.date && b?.date) {
        return a.date > b.date ? -1 : 1;
      } else {
        return 0;
      }
    });
  }
  return pages;
}

export function getPage(path: string, routes: Route[]): Route {
  return routes.find((p) => normalize(p.path) == path);
}

export function getSiblings(path: string, routes: Route[]) {
  let prev: Route, next: Route, index: number, total: number
  const folder = normalize(path.split("/").slice(0, -2).join("/"));
  const pages = getPages(routes)
  const list = pages[folder];
  if (list) {
    total = list.length
    index = list.findIndex((page) => normalize(page.path) == path);
    if (index >= 0 && index <= list.length) {
      next = list[index + 1];
    }
    if (index > 0) {
      prev = list[index - 1];
    }
  }
  return { prev, next, index, total }
}

export function getParents(path: string, routes: Route[]): Route[] {
  const parents = [];
  const url = path.split("/").filter(Boolean);
  for (let i in url) {
    const link = "/" + url.slice(0, -i).join("/") + "/";
    parents.push(
      routes.find((r) => {
        return r.path == link;
      })
    );
  }
  return parents.filter(Boolean).reverse();
}


export function normalize(url: string) {
  return (url += url.endsWith("/") ? "" : "/");
}