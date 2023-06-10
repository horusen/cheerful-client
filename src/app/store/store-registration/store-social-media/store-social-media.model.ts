import { BaseModel } from 'src/app/shared/models/BaseModel';

export interface StoreSocialMedia extends BaseModel {
  store_id: number;
  social_media_id: number;
  link: string;
}
