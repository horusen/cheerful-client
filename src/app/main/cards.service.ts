import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';

@Injectable({
  providedIn: 'root',
})
export class CardsService extends BaseService {
  constructor() {
    super('');
  }
}
