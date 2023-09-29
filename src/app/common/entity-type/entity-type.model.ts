import { BaseModel } from 'src/app/shared/models/BaseModel';

export interface EntityType extends BaseModel {
  name: string;
  description: string;
}
