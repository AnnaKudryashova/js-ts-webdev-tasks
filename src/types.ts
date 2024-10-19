export interface ImageData {
    name: string;
    alt: string;
}

export interface Tag {
    slug: string;
    title: string;
}

export interface CardData {
    image: ImageData;
    title: string;
    description: string;
    tags: Tag[];
}
