import { BaseModel } from 'src/app/shared/models/BaseModel';

export interface InvitationStatus extends BaseModel {
  name: string;
  description: string;
}
