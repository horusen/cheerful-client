import { BaseModel } from 'src/app/shared/models/BaseModel';

export interface City extends BaseModel {
  name: string;
  state_id: number;
}
