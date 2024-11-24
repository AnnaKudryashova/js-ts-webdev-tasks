import { AppInputButton } from "./molecules";

document.addEventListener("DOMContentLoaded", () => {
    const element = AppInputButton("Subscribe", "left");
    document.body.prepend(...[element]);
})