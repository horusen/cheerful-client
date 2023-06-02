export interface Product {
  id: string;
  name: string;
  description: string;
  minPrice?: number;
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: '839238',
    name: 'Melcom',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    minPrice: 200,
    imageUrl: './assets/img/content/items/featured-item-1.png',
  },
  {
    id: '599437',
    name: 'Kiki Clothing',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    minPrice: 200,
    imageUrl: './assets/img/content/items/featured-item-2.png',
  },
  {
    id: '098738',
    name: 'Accra Baby Store',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    minPrice: 200,
    imageUrl: './assets/img/content/items/featured-item-3.png',
  },
  {
    id: '839238',
    name: 'The barchop',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    minPrice: 200,
    imageUrl: './assets/img/content/items/featured-item-4.png',
  },
];
