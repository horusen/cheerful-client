import { BaseModel } from 'src/app/shared/models/BaseModel';
import { User } from 'src/app/users/users.model';
import { Business } from '../business/business.model';
import { ConnectionType } from './connection-type/connection-type.model';

export interface Connection extends BaseModel {
  connection_type_id?: number;

  user1_id?: number;

  user2_id?: number;

  business_id?: number;

  user1?: User;

  user2?: User;

  business?: Business;

  connection_type?: ConnectionType;
}
