import { AppHomePage } from "./pages";

document.addEventListener("DOMContentLoaded", async () => {
    const element = await AppHomePage();
    document.body.prepend(...[element]);
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(console.log);
});