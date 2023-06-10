import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services';
import { StoreAddress } from './store-address.model';

@Injectable({
  providedIn: 'root',
})
export class StoreRegistrationAddressService extends BaseService<StoreAddress> {
  constructor() {
    super('store-address');
  }
}
