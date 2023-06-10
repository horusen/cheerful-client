import { BaseModel } from 'src/app/shared/models/BaseModel';

export interface StoreAddress extends BaseModel {
  store_id: number;
  country_id: number;
  state_id: number;
  city_id: number;
  physical_address: string;
  google_maps_link: string;
}
