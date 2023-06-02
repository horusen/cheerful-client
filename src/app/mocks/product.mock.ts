export interface Product {
  id: string;
  name: string;
  description: string;
  minPrice?: number;
  imageUrl: string;
  provider: string;
}

export const products: Product[] = [
  {
    id: '839238',
    name: 'Melcom VoucherCard',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    minPrice: 200,
    imageUrl: './assets/img/content/items/featured-item-1.png',
    provider: 'Melcom',
  },
  {
    id: '599437',
    name: 'Kiki Clothing Gift Card',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    minPrice: 200,
    imageUrl: './assets/img/content/items/featured-item-2.png',
    provider: 'Kiki Clothing',
  },
  {
    id: '098738',
    name: 'Accra Baby Store Sweety Gift Card',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    minPrice: 200,
    imageUrl: './assets/img/content/items/featured-item-3.png',
    provider: 'Accra Baby Store',
  },
  {
    id: '839238',
    name: 'The barchop Golden Gift Card',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    minPrice: 200,
    imageUrl: './assets/img/content/items/featured-item-4.png',
    provider: 'The barchop',
  },
];
