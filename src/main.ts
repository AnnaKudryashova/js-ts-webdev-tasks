import { AppHome } from "./templates";


document.addEventListener("DOMContentLoaded", () => {
    const element = AppHome();
    document.body.prepend(...[element]);
})