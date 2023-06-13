import { Injectable } from '@angular/core';
import { TypeStore } from './type-store.model';
import { BaseService } from 'src/app/shared/services';

@Injectable({
  providedIn: 'root',
})
export class TypeStoreService extends BaseService<TypeStore> {
  constructor() {
    super('type-store');
  }
}
