export class Header {
    #node;

    constructor() {
        this.#node = document.createElement('header');
        this.#node.classList.add('page__header', 'header');

        this.#renderHeaderContent();
    }

    #renderHeaderContent() {
        const title = document.createElement('h3');
        title.classList.add('header__title');
        title.textContent = 'Our Works';

        const description = document.createElement('p');
        description.classList.add('header__description');
        description.textContent = 'The most important part of the Startup Framework is the samples. The samples form a set of 20 usable pages you can use as is or you can add new blocks from UI Kit.';

        this.#node.appendChild(title);
        this.#node.appendChild(description);
    }

    get node() {
        return this.#node;
    }
}
