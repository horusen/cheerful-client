import { BaseModel } from 'src/app/shared/models/BaseModel';
import { TypeStorePaymentMethodProvider } from '../type-store-payment-method-provider/type-store-payment-method-provider.model';

export interface StorePaymentMethodProvider extends BaseModel {
  name: string;
  type_payment_method_provider_id: number;
  type_payment_method_provider?: TypeStorePaymentMethodProvider;
}
