import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services';
import { PointHistory } from './point-history.model';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PointHistoryService extends BaseService<PointHistory> {
  constructor(public authService: AuthService) {
    super('points');
  }

  override store(elements: object) {
    return this.factory.post(`${this.endPoint}/load`, elements).pipe(
      tap({
        next: (response) => {
          this.lastItemCreated = response.data;
          this.unshiftItemInData(response.data);
          this.authService.updatePointBalance(response.data.amount);
        },
        error: (error) => {
          this.errorResponseHandler(error);
        },
      })
    );
  }

  getByBusiness() {
    return this.factory
      .get(`${this.endPoint}/business/${this.authService.business.id}`)
      .pipe(
        tap({
          next: (response) => {
            this.data = response.data;
          },
          error: (error) => {
            this.errorResponseHandler(error);
          },
        })
      );
  }

  getByUser() {
    return this.factory
      .get(`${this.endPoint}/user/${this.authService.user.id}`)
      .pipe(
        tap({
          next: (response) => {
            this.data = response.data;
          },
          error: (error) => {
            this.errorResponseHandler(error);
          },
        })
      );
  }
}
