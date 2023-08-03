import { BaseModel } from 'src/app/shared/models/BaseModel';

export interface Currency extends BaseModel {
  name: string;

  symbol: string;

  code: string;
}
