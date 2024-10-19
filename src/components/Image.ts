import { ImageData } from "../types";

export class Image {
    #node;

    constructor({ name, alt }: ImageData) {
        this.#node = document.createElement('img');
        this.#node.src = this.getImageUrl(name);
        this.#node.alt = alt;
        this.#node.classList.add("card__image");
    }

    getImageUrl(imageName: string): string {
        return new URL(`../assets/images/${imageName}.png`, import.meta.url).href;
    }

    get node() {
        return this.#node;
    }
}
