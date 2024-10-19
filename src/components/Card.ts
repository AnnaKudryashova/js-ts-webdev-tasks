import { Image as ImageComponent } from "./Image.js";
import TagsComponent from "./Tags.js";
import { CardData } from "../types.ts";

export class Card {
    #node;

    constructor(cardData: CardData) {
        this.#node = document.createElement('article');
        this.#node.classList.add('works__card', 'card');

        this.#renderCardContent(cardData);
    }

    #renderCardContent(cardData: CardData) {
        const imageComponent = new ImageComponent(cardData.image).node;

        const cardContent = document.createElement('div');
        cardContent.classList.add('card__content');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card__title');
        cardTitle.textContent = cardData.title;

        const cardDescription = document.createElement('p');
        cardDescription.classList.add('card__description');
        cardDescription.textContent = cardData.description;

        const tagsComponent = new TagsComponent(cardData.tags).node;

        cardContent.appendChild(cardTitle);
        cardContent.appendChild(cardDescription);
        cardContent.appendChild(tagsComponent);

        this.#node.appendChild(imageComponent);
        this.#node.appendChild(cardContent);
    }

    get node() {
        return this.#node;
    }
}
