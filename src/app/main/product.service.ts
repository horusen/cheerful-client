import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { products } from '../mocks/product.mock';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService {
  constructor() {
    super('');
    this.data = products;
  }

  getSingle(id: string) {
    this.singleData = this.data.find((x) => x.id === id);
  }
}
