import { BaseModel } from 'src/app/shared/models/BaseModel';

export interface SocialMedia extends BaseModel {
  name: string;
  description: string;
}
