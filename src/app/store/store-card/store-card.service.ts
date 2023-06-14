import { tap, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services';
import { StoreCard } from './store-card.model';

@Injectable({
  providedIn: 'root',
})
export class StoreCardService extends BaseService<StoreCard> {
  constructor() {
    super('store-card');
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
