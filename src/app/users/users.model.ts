import { File } from '../common/file/file.model';
import { BaseModel } from '../shared/models/BaseModel';

export interface User extends BaseModel {
  name: string;
  gender_id?: number;
  country_id?: number;
  type_user_id: number;
  phone_number: string;
  email: string;
  password?: string;
  profile_pic?: File;
  point_balance?: number;
}
