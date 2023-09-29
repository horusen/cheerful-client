import { Injectable } from '@angular/core';
import { Store } from './store.model';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { BaseService } from 'src/app/shared/services';

@Injectable({
  providedIn: 'root',
})
export class StoreService extends BaseService<Store> {
  constructor(public authService: AuthService) {
    super('store');
  }

  override update(id: number, data: {}) {
    return this.factory.put(`${this.endPoint}/${id}`, data).pipe(
      tap({
        next: (response) => {
          this.updateItemInData(id, response.data);
          this.lastItemEdited$.next(response.data);

          if (this._singleData) {
            this.singleData = response.data;
          }
          this.authService.shop = response.data;
        },
        error: (error) => this.errorResponseHandler(error),
      })
    );
  }

  getByStoreLink(storeLink: string) {
    return this.factory.get(`${this.endPoint}/storefront/${storeLink}`).pipe(
      tap({
        next: (response) => {
          this.singleData = response.data;
        },
        error: (error) => this.errorResponseHandler(error),
      })
    );
  }
}
