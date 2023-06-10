import { BaseModel } from '../shared/models/BaseModel';

export interface Store extends BaseModel {
  name: string;
  description: string;
  phone_number: string;
  store_online_link: string;
  type_store_id: number;
  category_store_id: number;
}
