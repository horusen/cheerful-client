import { Injectable } from '@angular/core';
import { Currency } from './currency.model';
import { BaseService } from 'src/app/shared/services';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService extends BaseService<Currency> {
  constructor() {
    super('currency');
  }
}
