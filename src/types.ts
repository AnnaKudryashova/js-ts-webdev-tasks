export type NavLink = {
    href: string;
    label: string;
};

export type HeroData = {
    logo: string;
    navLinks: NavLink[];
    languages: string;
    reservationLabel: string;
    date: string;
    title: string;
    calendarIcon: string;
    arrowIcon: string;
};

type GalleryImage = {
    src: string;
    alt: string;
};

export type GalleryData = {
    title: string;
    images: GalleryImage[];
    batsImageSrc: string;
};

type SocialImage = {
    src: string;
    alt: string;
};

export type FooterData = {
    phoneText: string;
    socials: SocialImage[];
};