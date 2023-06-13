import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { Store } from './store.model';
import { tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

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
}
