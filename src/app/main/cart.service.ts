import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';

@Injectable({
  providedIn: 'root',
})
export class CartService extends BaseService {
  constructor() {
    super('');
  }

  addToCart(product: any) {
    this.data.push(product);
  }
}
