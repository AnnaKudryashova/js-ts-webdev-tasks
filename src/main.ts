import { Header } from './components/Header';
import { Section } from './components/Section';
import { Page } from './components/Page';
import { Card } from "./components/Card";
import { CardContainer } from "./components/CardContainer";
import { loadData } from "./api/loadData";
import { CardData } from "./types";
import { Loader } from './components/Loader';

async function renderPage(data: CardData[]) {

    const loader = document.querySelector('.loader-wrapper');
    if (loader) {
        loader.remove();
    }

    const header = new Header().node;
    const section = new Section().node;

    const cardContainer = new CardContainer();

    data.forEach(cardData => {
        const card = new Card(cardData);
        cardContainer.addCard(card);
    });

    section.appendChild(cardContainer.node);
    const page = new Page(header, section);
    document.body.appendChild(page.node);
}

async function initApp() {
    const loader = new Loader();
    document.body.appendChild(loader.node);

    try {
        const data = await loadData();
        renderPage(data);
    } catch (error) {
        console.error("Error loading data:", error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});
