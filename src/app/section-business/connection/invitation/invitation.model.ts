import { BaseModel } from 'src/app/shared/models/BaseModel';
import { User } from 'src/app/users/users.model';
import { Business } from '../../business/business.model';
import { ConnectionType } from '../connection-type/connection-type.model';
import { InvitationStatus } from './invitation-status/invitation-status.model';

export interface Invitation extends BaseModel {
  connection_type_id?: number;

  sender_business_id?: number;

  sender_user_id?: number;

  receiver_id?: number;

  status_id?: number;

  receiver?: User;

  connection_type?: ConnectionType;

  sender_user?: User;

  sender_business?: Business;

  status?: InvitationStatus;

  date?: Date;
}
