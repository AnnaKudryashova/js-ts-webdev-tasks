import { HeroComponent } from '../components/HeroComponent/HeroComponent';
import { GalleryComponent } from '../components/GalleryComponent/GalleryComponent';
import { FooterComponent } from '../components/FooterComponent/FooterComponent';
import { changeLocale } from '../utils/translate';
import "./AppPageHalloween.css";
import { HeroData, GalleryData, FooterData } from '../types';

export function AppPageHalloween(heroData: HeroData, galleryData: GalleryData, footerData: FooterData) {
  const app = document.querySelector('#app');

  if (app) {
    app.innerHTML = HeroComponent(heroData);
    app.appendChild(GalleryComponent(galleryData));
    app.appendChild(FooterComponent(footerData));

    const langToggleDiv = document.querySelector('.hero__languages');
    if (langToggleDiv) {
      langToggleDiv.addEventListener("click", () => {
        changeLocale();
      });
    }
  }
}