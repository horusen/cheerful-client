import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services';
import { PointHistory } from './point-history.model';

@Injectable({
  providedIn: 'root',
})
export class PointHistoryService extends BaseService<PointHistory> {
  constructor() {
    super('points');
  }

  override store(elements: object) {
    return this.factory.post(`${this.endPoint}/load`, elements).pipe(
      tap({
        next: (response) => {
          this.lastItemCreated = response.data;
          this.unshiftItemInData(response.data);
        },
        error: (error) => {
          this.errorResponseHandler(error);
        },
      })
    );
  }
}
