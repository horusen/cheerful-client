import { BaseModel } from 'src/app/shared/models/BaseModel';

export interface Country extends BaseModel {
  name: string;
  currency: string;
}
