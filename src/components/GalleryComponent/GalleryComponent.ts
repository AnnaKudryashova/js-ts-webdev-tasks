import "./GalleryComponent.css";
import { GalleryData } from "../../types";

  export function GalleryComponent(data: GalleryData): HTMLElement {
    const gallerySection = document.createElement('section');
    gallerySection.classList.add('gallery');
    gallerySection.setAttribute('id', 'gallery');
    const batsImage = document.createElement('div');
    batsImage.classList.add('gallery__bats-image');
    const batsImg = document.createElement('img');
    batsImg.src = data.batsImageSrc;
    batsImg.alt = 'Bats Image';
    batsImage.appendChild(batsImg);
    gallerySection.appendChild(batsImage);

    const galleryTitle = document.createElement('h2');
    galleryTitle.classList.add('gallery__title');
    galleryTitle.setAttribute('data-i18n', 'title-gallery');
    galleryTitle.innerText = data.title;
    gallerySection.appendChild(galleryTitle);

    const cardContainer = document.createElement('ul');
    cardContainer.classList.add('gallery__card-container');

    data.images.forEach((image) => {
      const cardItem = document.createElement('li');
      cardItem.classList.add('gallery__card-item');

      const card = document.createElement('div');
      card.classList.add('card');

      const img = document.createElement('img');
      img.src = image.src;
      img.alt = image.alt;
      card.appendChild(img);

      cardItem.appendChild(card);
      cardContainer.appendChild(cardItem);
    });

    gallerySection.appendChild(cardContainer);

    return gallerySection;
  }
