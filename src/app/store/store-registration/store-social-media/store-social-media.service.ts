import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services';
import { StoreSocialMedia } from './store-social-media.model';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreSocialMediaService extends BaseService<StoreSocialMedia> {
  constructor() {
    super('store-social-media');
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
