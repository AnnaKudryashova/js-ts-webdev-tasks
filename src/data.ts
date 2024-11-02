import { HeroData } from './types';
import { GalleryData } from './types';
import { FooterData } from './types';

export const heroData: HeroData = {
  logo: 'Party Time!',
  navLinks: [
    { href: '#', label: 'Home' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#about', label: 'About Party' },
    { href: '#reservation', label: 'Reservation' },
    { href: '#contacts', label: 'Contacts' },
  ],
  languages: 'EN عرب',
  reservationLabel: 'Reservation',
  date: '31 Octobr 2023',
  title: "It's Halloween Party O'Clock!",
  calendarIcon: './assets/svg/calendar.svg',
  arrowIcon: './assets/svg/arrow-down.svg',
};

export const galleryData: GalleryData = {
  title: 'Halloween Memories',
  batsImageSrc: './assets/img/hero_bats.png',
  images: [
    { src: './assets/img/image01.png', alt: 'Image 01' },
    { src: './assets/img/image02.png', alt: 'Image 02' },
    { src: './assets/img/image03.png', alt: 'Image 03' },
    { src: './assets/img/image04.png', alt: 'Image 04' },
    { src: './assets/img/image05.png', alt: 'Image 05' },
    { src: './assets/img/image06.png', alt: 'Image 06' },
    { src: './assets/img/image07.png', alt: 'Image 07' },
    { src: './assets/img/image08.png', alt: 'Image 08' },
    { src: './assets/img/image09.png', alt: 'Image 09' },
    { src: './assets/img/image10.png', alt: 'Image 10' },
  ],
};

export const footerData: FooterData = {
  phoneText: 'Phone reservation? (+1) 987 46 52',
  socials: [
    { src: './assets/img/behance.png', alt: 'Behance' },
    { src: './assets/img/figma.png', alt: 'Figma' },
    { src: './assets/img/linkedin.png', alt: 'LinkedIn' },
    { src: './assets/img/instagram.png', alt: 'Instagram' },
    { src: './assets/img/youtube.png', alt: 'YouTube' },
  ],
};