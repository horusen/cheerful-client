import { BaseModel } from 'src/app/shared/models/BaseModel';

export interface BusinessType extends BaseModel {
  name: string;
  description: string;
}
