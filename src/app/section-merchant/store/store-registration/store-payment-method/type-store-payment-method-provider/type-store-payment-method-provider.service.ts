import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services';
import { TypeStorePaymentMethodProvider } from './type-store-payment-method-provider.model';

@Injectable({
  providedIn: 'root',
})
export class TypeStorePaymentMethodProviderService extends BaseService<TypeStorePaymentMethodProvider> {
  constructor() {
    super('type-payment-method-provider');
  }
}
