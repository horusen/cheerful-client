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
    name: 'Sahmini VoucherCard',
    description: `Our gold necklace features a delicate chain crafted from lustrous 14K gold, known for its enduring beauty and exceptional quality. The chain gracefully drapes around the neck, enhancing the wearer's natural beauty and adding a touch of luxury to any outfit.`,
    minPrice: 200,
    imageUrl: './assets/img/content/items/featured-item-1.png',
    provider: 'Melcom',
  },
  {
    id: '599437',
    name: 'Sahmini Special earing Card',
    description: `Introducing our latest collection of trendy and fashionable clothing that will elevate your style game to new heights! Whether you're looking for casual comfort or elegant sophistication, our clothing line has something for everyone.`,
    minPrice: 200,
    imageUrl: './assets/img/content/items/featured-item-2.png',
    provider: 'Kiki Clothing',
  },
  {
    id: '098738',
    name: 'Melcome Gift voucher',
    description: `Delightful baby store, where we cater to all your little one's needs with love and care. From adorable clothing to essential accessories, we have everything you require to create a safe, comfortable, and stylish environment for your precious bundle of joy.
`,
    minPrice: 200,
    imageUrl: './assets/img/content/items/featured-item-3.png',
    provider: 'Accra Baby Store',
  },
  {
    id: '123238',
    name: 'Melcom Gold Card',
    description: `Keep your baby entertained and engaged with our selection of toys and developmental aids. From plush cuddly friends to colorful rattles and teething toys, our products are designed to promote cognitive development and sensory exploration. Explore our range of educational toys and books that will nurture your baby's curiosity and early learning..`,
    minPrice: 200,
    imageUrl: './assets/img/content/items/featured-item-4.png',
    provider: 'The barchop',
  },
  {
    id: '464238',
    name: 'Kiki Clothing Gift Card',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    minPrice: 400,
    imageUrl: './assets/img/content/items/featured-item-5.png',
    provider: 'The barchop',
  },
  {
    id: '833238',
    name: 'Kiki Clothing Gift Card',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    minPrice: 600,
    imageUrl: './assets/img/content/items/featured-item-6.png',
    provider: 'The barchop',
  },
  {
    id: '835143',
    name: 'Renée Q Gift Card',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    minPrice: 450,
    imageUrl: './assets/img/content/items/featured-item-7.png',
    provider: 'Renée Q',
  },
  {
    id: '839135',
    name: 'Renée Q Gift Card',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    minPrice: 750,
    imageUrl: './assets/img/content/items/featured-item-8.png',
    provider: 'Renée Q',
  },
  {
    id: '831435',
    name: 'Bar Chop Gift Card',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    minPrice: 710,
    imageUrl: './assets/img/content/items/featured-item-9.png',
    provider: 'Bar Chop',
  },
  {
    id: '834335',
    name: 'Bar Chop Gift Card',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    minPrice: 210,
    imageUrl: './assets/img/content/items/featured-item-10.png',
    provider: 'Bar Chop',
  },
  {
    id: '899935',
    name: 'Accra Baby Store Gift Card',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    minPrice: 210,
    imageUrl: './assets/img/content/items/featured-item-11.png',
    provider: 'Accra Baby Store',
  },
  {
    id: '891135',
    name: 'Baby Clothing Store Gift Card',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    minPrice: 210,
    imageUrl: './assets/img/content/items/featured-item-12.png',
    provider: 'Accra Baby Store',
  },
];
