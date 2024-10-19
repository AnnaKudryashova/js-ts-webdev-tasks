export class Loader {
    #node: HTMLElement;

    constructor() {
        this.#node = document.createElement('div');
        this.#node.classList.add('loader-wrapper');

        const spinner = document.createElement('div');
        spinner.classList.add('loader');

        this.#node.appendChild(spinner);
    }

    get node() {
        return this.#node;
    }
}
