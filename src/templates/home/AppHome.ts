import { AppSubscribe } from "../../organisms";

export function AppHome() {
    const subscribe = AppSubscribe();

    const element = document.createElement("section");

    element.append(...[subscribe]);

    return element;
}