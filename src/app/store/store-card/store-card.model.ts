export interface StoreCard {
  id: number;
  name: string;
  card_image_id: string;
  card_image: {
    id: string;
    url: string;
  };
  min_price: number;
}
