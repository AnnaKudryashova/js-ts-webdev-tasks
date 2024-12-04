export function AppText(tag: "h2" | "p", content: string) : HTMLElement {
    const el = document.createElement(tag);
    el.innerHTML = content;

    return el;
}