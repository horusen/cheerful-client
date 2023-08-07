import { EntityType } from 'src/app/common/entity-type/entity-type.model';
import { Business } from 'src/app/section-business/business/business.model';
import { BaseModel } from 'src/app/shared/models/BaseModel';
import { User } from 'src/app/users/users.model';

export interface PointTransfer extends BaseModel {
  amount?: number;

  sender_user_id?: number;

  sender_business_id?: number;

  date?: Date;

  sender_entity_type_id?: number;

  receiver_id?: number;

  receiver_ids?: number[];

  sender_entity_type?: EntityType;

  sender_business?: Business;

  sender_user?: User;

  receiver?: User;
}
