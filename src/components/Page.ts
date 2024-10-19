export class Page {
    #node;

    constructor(header: HTMLElement, section: HTMLElement) {
        this.#node = document.createElement('div');
        this.#node.classList.add('page');

        this.#node.appendChild(header);
        this.#node.appendChild(section);
    }

    get node() {
        return this.#node;
    }
}
