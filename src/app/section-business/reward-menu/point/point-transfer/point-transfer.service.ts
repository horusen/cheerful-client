import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services';
import { PointTransfer } from './point-transfer.model';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PointTransferService extends BaseService<PointTransfer> {
  constructor(public authService: AuthService) {
    super('points/transfert');
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
