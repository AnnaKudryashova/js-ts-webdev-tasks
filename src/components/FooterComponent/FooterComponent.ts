import "./FooterComponent.css";
import { FooterData } from "../../types";

export function FooterComponent(data: FooterData): DocumentFragment {
    const template = document.querySelector('template#footer-template');

    if (!template) {
        throw new Error("There is no element footer template");
    }

    const clone = template.content.cloneNode(true) as DocumentFragment;

    const phoneContent = clone.querySelector('div.footer__phone-content');

    if (!phoneContent) {
        throw new Error("There is no element phoneContent");
    }

    if (phoneContent) phoneContent.setAttribute('data-i18n', 'phoneText');
    phoneContent.textContent = data.phoneText;

    const socialList = clone.querySelector('ul.footer__social-list');
    data.socials.forEach((social) => {
      const listItem = document.createElement('li');
      listItem.classList.add('footer__social-item');
      const img = document.createElement('img');
      img.src = social.src;
      img.alt = social.alt;
      listItem.appendChild(img);
      socialList?.appendChild(listItem);
    });

    return clone;
  }