export class CardContainer {
    #node;

    constructor() {
        this.#node = document.createElement('div');
        this.#node.classList.add('works__list');
    }

    addCard(card) {
        this.#node.appendChild(card.node);
    }

    get node() {
        return this.#node;
    }
}