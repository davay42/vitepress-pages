import { routes, pages } from "./pages.js";


console.log(routes, pages)

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('app').innerHTML = JSON.stringify(pages)
});
