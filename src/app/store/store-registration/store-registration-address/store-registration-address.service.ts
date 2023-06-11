import { tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services';
import { StoreAddress } from './store-address.model';

@Injectable({
  providedIn: 'root',
})
export class StoreRegistrationAddressService extends BaseService<StoreAddress> {
  constructor() {
    super('store-address');
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
