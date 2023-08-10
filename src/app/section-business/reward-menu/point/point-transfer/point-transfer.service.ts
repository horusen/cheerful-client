import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services';
import { PointTransfer } from './point-transfer.model';
import { AuthService } from 'src/app/auth/auth.service';
import { Storage } from 'src/app/helpers/storage/storage';

@Injectable({
  providedIn: 'root',
})
export class PointTransferService extends BaseService<PointTransfer> {
  constructor(public authService: AuthService, public storage: Storage) {
    super('points/transfert');
  }

  override store(elements: any) {
    return this.factory.post(this.endPoint, elements).pipe(
      tap({
        next: (response) => {
          this.lastItemCreated = response.data;
          this.unshiftItemInData(response.data);

          this.authService.updatePointBalance(elements.amount, false);
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
