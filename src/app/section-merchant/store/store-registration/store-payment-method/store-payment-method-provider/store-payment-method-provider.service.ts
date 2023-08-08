import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services';
import { StorePaymentMethodProvider } from './store-payment-method-provider.model';
import { map, tap } from 'rxjs';
import { ApiResponse } from 'src/app/shared/models/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class StorePaymentMethodProviderService extends BaseService<StorePaymentMethodProvider> {
  constructor() {
    super('payment-method-provider');
  }

  getByTypePaymentMethodProviderId(typePaymentMethodProviderId: number) {
    return this.factory
      .get(
        `${this.endPoint}/type-payment-method-provider/${typePaymentMethodProviderId}`
      )
      .pipe(
        tap((response: ApiResponse<StorePaymentMethodProvider>) => {
          this.data = response.data;
        }),
        map((response: ApiResponse<StorePaymentMethodProvider>) => {
          return response.data;
        })
      );
  }
}
