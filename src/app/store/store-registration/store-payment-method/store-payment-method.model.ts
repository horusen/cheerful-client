import { BaseModel } from 'src/app/shared/models/BaseModel';
import { StorePaymentMethodProvider } from './store-payment-method-provider/store-payment-method-provider.model';

export interface StorePaymentMethod extends BaseModel {
  store_id: number;
  type_payment_method_provider_id?: number;
  payment_method_provider_id: number;
  account_number: string;
  payment_method_provider?: StorePaymentMethodProvider;
}
