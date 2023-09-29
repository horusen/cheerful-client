import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services';
import { CategoryStore } from './category-store.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryStoreService extends BaseService<CategoryStore> {
  constructor() {
    super('category-store');
  }
}
