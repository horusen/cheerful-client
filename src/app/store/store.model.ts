import { BaseModel } from '../shared/models/BaseModel';
import { CategoryStore } from './category-store/category-store.model';
import { StoreCard } from './store-card/store-card.model';
import { StorePaymentMethod } from './store-registration/store-payment-method/store-payment-method.model';
import { StoreAddress } from './store-registration/store-registration-address/store-address.model';
import { TypeStore } from './type-store/type-store.model';

export interface Store extends BaseModel {
  name: string;
  description: string;
  phone_number: string;
  store_online_link: string;
  type_store_id: number;
  category_store_id: number;
  category_store?: CategoryStore;
  type_store?: TypeStore;
  email?: string;
  store_logo_image?: {
    id: string;
    url: string;
  };
  store_cover_image?: {
    id: string;
    url: string;
  };
  card_min_price?: number;
  card: StoreCard;
  addresses: StoreAddress[];
  payment_methods: StorePaymentMethod[];
}
