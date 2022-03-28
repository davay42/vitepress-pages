export function trailSlash(url) {
  return (url += url.endsWith("/") ? "" : "/");
}

let pages = {};

export function getPages(routes) {
  pages = {}
  for (let route of routes) {
    const split = route.path.split("/").slice(0, -1).join("/");
    const folder = trailSlash(split);
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

export function getPage(path, routes) {
  const page = routes.find((p) => trailSlash(p.path) == path);
  if (!pages) {
    pages = getPages(routes);
  }
  const siblings = getSiblings(path, pages);
  const parents = getParents(path, routes);
  return { page, pages, siblings, parents };
}

export function getSiblings(path, pages) {
  const siblings = {
    prev: null,
    next: null,
  };
  const folder = trailSlash(path.split("/").slice(0, -2).join("/"));

  const list = pages[folder];
  if (list) {
    const index = list.findIndex((page) => trailSlash(page.path) == path);
    if (index >= 0 && index <= list.length) {
      siblings.next = list[index + 1];
    }
    if (index > 0) {
      siblings.prev = list[index - 1];
    }
  }
  return siblings;
}

export function getParents(path, routes) {
  const parents = [];
  const url = path.split("/").filter(Boolean);
  for (let i in url) {
    const link = "/" + url.slice(0, -i).join("/");
    parents.push(
      routes.find((r) => {
        return r.path == link;
      })
    );
  }
  return parents.filter(Boolean).reverse();
}
