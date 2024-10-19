export default class Tags {
    #node;

    constructor(tags: { slug: string, title: string }[]) {
        this.#node = document.createElement('div');
        this.#node.classList.add('card__tags');

        tags.forEach((tag, index) => {
            const tagElement = document.createElement('span');
            tagElement.textContent = tag.title;

            this.#node.appendChild(tagElement);

            if (index < tags.length - 1) {
                this.#node.appendChild(document.createTextNode(', '));
            }
        });
    }

    get node() {
        return this.#node;
    }
}
