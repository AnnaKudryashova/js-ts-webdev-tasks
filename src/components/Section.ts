export class Section {
    #node;

    constructor() {
        this.#node = document.createElement('section');
        this.#node.classList.add('works');
        this.#node.id = 'app';
    }

    get node() {
        return this.#node;
    }
}
