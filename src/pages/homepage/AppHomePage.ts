import { AppHome } from "../../templates";

export function AppHomePage() {
    const appHome = AppHome();

    const element = document.createElement("main");

    element.append(...[appHome]);

    return element;
}