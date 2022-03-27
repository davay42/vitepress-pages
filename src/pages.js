import routes from "~pages";


function usePages(routes) {
  const pages = {};
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
  return pages
}

const pages = usePages(routes)


export { routes, pages };


export function trailSlash(url) {
  return (url += url.endsWith("/") ? "" : "/");
}
