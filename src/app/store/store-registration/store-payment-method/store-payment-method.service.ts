import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services';
import { StorePaymentMethod } from './store-payment-method.model';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorePaymentMethodService extends BaseService<StorePaymentMethod> {
  constructor() {
    super('store-payment-method');
  }

  getByStoreId(storeId: number) {
    return this.factory.get(`${this.endPoint}/store/${storeId}`).pipe(
      tap((response) => {
        this.data = response;
      }),
      map((response) => response.data)
    );
  }
}
