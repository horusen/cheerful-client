import { Country } from 'src/app/common/country/country.model';
import { State } from 'src/app/common/state/state.model';
import { BaseModel } from 'src/app/shared/models/BaseModel';

export interface StoreAddress extends BaseModel {
  store_id: number;
  country_id: number;
  state_id: number;
  address: string;
  google_maps_link: string;
  country?: Country;
  state?: State;
}
