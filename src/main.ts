import { AppHomePage } from "./pages";

document.addEventListener("DOMContentLoaded", () => {
    const element = AppHomePage();
    document.body.prepend(...[element]);
});