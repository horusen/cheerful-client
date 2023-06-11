import { BaseModel } from '../shared/models/BaseModel';
import { CategoryStore } from './category-store/category-store.model';
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
}
