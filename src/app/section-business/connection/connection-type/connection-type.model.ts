import { BaseModel } from 'src/app/shared/models/BaseModel';

export interface ConnectionType extends BaseModel {
  name?: string;
  description?: string;
}
