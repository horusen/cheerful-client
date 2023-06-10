import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { Store } from './store.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService extends BaseService<Store> {
  constructor() {
    super('store');
  }
}
