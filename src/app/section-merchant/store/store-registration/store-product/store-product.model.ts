import { File } from 'src/app/common/file/file.model';
import { BaseModel } from 'src/app/shared/models/BaseModel';

export interface StoreProduct extends BaseModel {
  name?: string;
  description?: string;
  price?: number;
  storeId?: string;
  image?: File;
}
