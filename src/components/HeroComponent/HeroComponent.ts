import { NavLinkComponent } from '../NavLinkComponent/NavLinkComponent';
import "./HeroComponent.css";
import { HeroData } from '../../types';

export function HeroComponent(data: HeroData): string {
  const navLinks = data.navLinks.map(NavLinkComponent).join('');

  return `
    <section class="hero">
      <header class="hero__header">
        <div class="hero__logo" data-i18n="logo">${data.logo}</div>
        <nav class="hero__nav">
          <ul class="nav__list">
            ${navLinks}
          </ul>
        </nav>
        <div class="hero__languages" data-i18n="languages">${data.languages}</div>
        <button class="button button--primary hero__button" data-i18n="reservationLabel">${data.reservationLabel}</button>
      </header>
      <div class="hero__spacer"></div>
      <div class="hero__content">
        <div class="hero__calendar">
          <img src="${data.calendarIcon}" class="hero__calendar-icon" alt="calendar" data-i18n="">
          <span class="hero__date" data-i18n="date">${data.date}</span>
        </div>
        <h1 class="hero__title" data-i18n="title-hero">${data.title}</h1>
      </div>
      <div class="hero__arrow">
        <img src="${data.arrowIcon}" alt="arrow">
      </div>
      <div class="spacer spacer--before-gallery"></div>
    </section>
  `;
}
