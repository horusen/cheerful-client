import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services';
import { City } from './city.model';
import { ApiResponse } from 'src/app/shared/models/ApiResponse';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityService extends BaseService<City> {
  constructor() {
    super('city');
  }

  getByStateId(stateId: number) {
    return this.factory.get(`${this.endPoint}/state/${stateId}`).pipe(
      tap((response: ApiResponse<City>) => {
        this.data = response.data;
      }),
      map((response: ApiResponse<City>) => response.data)
    );
  }
}
