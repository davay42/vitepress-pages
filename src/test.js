import { routes, pages } from "./pages.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('app').innerHTML = `
  <h2>Routes</h2>
  <p>${JSON.stringify(routes)}</p>
  <h2>Pages</h2>
  <p>${JSON.stringify(pages)}</p>`
});
