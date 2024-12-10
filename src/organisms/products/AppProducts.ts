import { AppText } from "../../atoms";
import { AppCard } from "../../molecules";

export function AppProducts(
    products: {title: string; price: number}[]
): HTMLElement {
    const items = products.map((product) => AppCard(product));
    const labelNode = AppText("h2", "Our latest products");
    const descNode = AppText("p", "lorem ipsum...");
    const element = document.createElement("div");
    element.append(...[labelNode, descNode, ...items]);
    return element;
}