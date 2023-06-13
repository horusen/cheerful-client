import { Injectable } from '@angular/core';
import { Country } from './country.model';
import { BaseService } from 'src/app/shared/services';

@Injectable({
  providedIn: 'root',
})
export class CountryService extends BaseService<Country> {
  constructor() {
    super('country');
  }
}
