class Button {
    #node;

    constructor({buttonLabel, backgroundColor, border, className}) {
      this.#node = document.createElement('button');
      this.#node.textContent = buttonLabel;
      if (backgroundColor) this.#node.style.backgroundColor = backgroundColor;
      if (border) this.#node.style.border = border;
      if (className) this.#node.classList.add(className);
    }

    get node() {
      return this.#node;
    }
  }

  class Card {
    #node;

    constructor({ title, content, buttonProps, className, backgroundColor }) {
      this.#node = document.createElement('div');
      this.#node.classList.add('card-first');
      if (className) this.#node.classList.add(className);
      if (backgroundColor) this.#node.style.backgroundColor = backgroundColor;

      this.#renderCardContent({ title, content, buttonProps });
    }

    #renderCardContent({ title, content, buttonProps }) {
      const cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = title;

      const cardContent = document.createElement('div');
      cardContent.classList.add('card-content');
      cardContent.textContent = content;

      const cardButtonDiv = document.createElement('div');
      cardButtonDiv.classList.add('card-button');

      const cardButton = new Button(buttonProps).node;
      cardButtonDiv.appendChild(cardButton);

      this.#node.appendChild(cardTitle);
      this.#node.appendChild(cardContent);
      this.#node.appendChild(cardButtonDiv);
    }

    get node() {
      return this.#node;
    }
  }

  class Heading {
    #node;

    constructor(tag, content) {
      this.#node = document.createElement(tag);
      this.#node.textContent = content;
    }

    get node() {
      return this.#node;
    }
  }

  class Container {
    #node;

    constructor() {
      this.#node = document.createElement('div');
      this.#node.classList.add('container');
    }

    addChild(child) {
      this.#node.appendChild(child.node);
    }

    get node() {
      return this.#node;
    }
  }

  class Header {
    #node;

    constructor() {
      this.#node = document.createElement('div');
      this.#node.classList.add('header');

      this.#renderHeader();
    }

    #renderHeader() {
      const heading = new Heading('h3', 'Last works').node;

      const exploreDiv = document.createElement('div');
      exploreDiv.classList.add('explore_showcase');

      const exploreButton = new Button({buttonLabel:'Explore Showcase', backgroundColor: '#fff', border: '2px solid #ebeaed', color: '#1e0e62'}).node;
      exploreDiv.appendChild(exploreButton);

      this.#node.appendChild(heading);
      this.#node.appendChild(exploreDiv);
    }

    get node() {
      return this.#node;
    }
  }

  class CardContainer {
    #node;

    constructor() {
      this.#node = document.createElement('div');
      this.#node.classList.add('card-container');
    }

    addCard(card) {
      this.#node.appendChild(card.node);
    }

    get node() {
      return this.#node;
    }
  }

  function loadData() {

    return [
      { title: 'Startup Framework',
        content: 'Startup is a powerful tool for quick and convenient prototyping of your projects. It will fit most projects because it contains up-to-date and modern web elements.',
        buttonProps: {
          buttonLabel: 'Explore',
          backgroundColor: '#fff'
        },
        className: 'card-first',
        backgroundColor: '#ebeaed'
      },
      { title: 'Web Generator',
        content: 'Startup is a powerful tool for quick and convenient prototyping of your projects. It will fit most projects because it contains up-to-date and modern web elements.',
        buttonProps: {
          buttonLabel: 'Explore',
          backgroundColor: '#25dac5'
        },
        className: 'card-second'
      },
      { title: 'Slides 4',
        content: 'All of these components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions for your future projects.',
        buttonProps: {
          buttonLabel: 'Explore',
          backgroundColor: '#fff'
        },
        className: 'card-third',
        backgroundColor: '#482be7'
      },
      { title: 'Postcards',
        content: 'All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.',
        buttonProps: {
          buttonLabel: 'Explore',
          backgroundColor: '#fff'
        },
        className: 'card-fourth'
      }
    ];
  }

  function renderPage(data) {
    const container = new Container();
    const header = new Header();
    container.addChild(header);
    const cardContainer = new CardContainer();

    data.forEach(cardData => {
      const card = new Card(cardData);
      cardContainer.addCard(card);
    });

    container.addChild(cardContainer);

    const app = document.getElementById('app');
    app.appendChild(container.node);
  }

  function initApp() {
    const data = loadData();
    renderPage(data);
  }

  document.addEventListener('DOMContentLoaded', () => {
    initApp();
  });
