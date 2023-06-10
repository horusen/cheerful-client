import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services';
import { State } from './state.model';
import { map, tap } from 'rxjs';
import { ApiResponse } from 'src/app/shared/models/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class StateService extends BaseService<State> {
  constructor() {
    super('state');
  }

  getByCountryId(countryId: number) {
    return this.factory.get(`${this.endPoint}/country/${countryId}`).pipe(
      tap((response: ApiResponse<State>) => {
        this.data = response.data;
      }),
      map((response: ApiResponse<State>) => response.data)
    );
  }
}
