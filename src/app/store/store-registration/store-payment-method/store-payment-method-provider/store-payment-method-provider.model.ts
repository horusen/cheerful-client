import { BaseModel } from 'src/app/shared/models/BaseModel';

export interface StorePaymentMethodProvider extends BaseModel {
  name: string;
  type_payment_method_provider_id: number;
}
