import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services';
import { Business } from './business.model';
import { tap } from 'rxjs/internal/operators/tap';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class BusinessService extends BaseService<Business> {
  constructor(public authService: AuthService) {
    super('business');
  }

  override update(id: number, data: {}) {
    return this.factory.put(`${this.endPoint}/${id}`, data).pipe(
      tap({
        next: (response: any) => {
          this.updateItemInData(id, response.data);
          this.lastItemEdited$.next(response.data);

          if (this._singleData) {
            this.singleData = response.data;
          }
          this.authService.business = response.data;
        },
        error: (error) => this.errorResponseHandler(error),
      })
    );
  }
}
