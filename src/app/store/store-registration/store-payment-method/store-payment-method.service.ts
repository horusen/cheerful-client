import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services';
import { StorePaymentMethod } from './store-payment-method.model';

@Injectable({
  providedIn: 'root',
})
export class StorePaymentMethodService extends BaseService<StorePaymentMethod> {
  constructor() {
    super('store-payment-method');
  }
}
