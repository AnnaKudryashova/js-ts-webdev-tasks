import { AppSubscribe } from "./organisms";

document.addEventListener("DOMContentLoaded", () => {
    const element = AppSubscribe();
    document.body.prepend(...[element]);
})