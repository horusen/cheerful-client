import { tap, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services';
import { StoreProduct } from './store-product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreProductService extends BaseService<StoreProduct> {
  constructor() {
    super('store-product');
  }

  getByStoreId(storeId: number) {
    return this.factory.get(`${this.endPoint}/store/${storeId}`).pipe(
      tap((response) => {
        this.data = response.data;
      }),
      map((response) => response.data)
    );
  }
}
