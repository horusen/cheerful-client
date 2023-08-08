import { BaseModel } from 'src/app/shared/models/BaseModel';
import { CategoryStore } from './category-store/category-store.model';
import { StoreAddress } from './store-registration/store-registration-address/store-address.model';
import { StoreSocialMedia } from './store-registration/store-social-media/store-social-media.model';
import { TypeStore } from './type-store/type-store.model';

export interface Store extends BaseModel {
  name: string;
  description: string;
  phone_number: string;
  online_link: string;
  type_store_id: number;
  category_store_id: number;
  category_store?: CategoryStore;
  type_store?: TypeStore;
  email?: string;
  logo_id?: string;
  cover_id: string;
  logo?: {
    id: string;
    url: string;
  };
  cover?: {
    id: string;
    url: string;
  };
  card_min_price?: number;
  addresses: StoreAddress[];
  social_medias: StoreSocialMedia[];
  registration_completed: boolean;
}
