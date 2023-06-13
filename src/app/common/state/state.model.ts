import { BaseModel } from 'src/app/shared/models/BaseModel';

export interface State extends BaseModel {
  name: string;
  country_id: number;
}
