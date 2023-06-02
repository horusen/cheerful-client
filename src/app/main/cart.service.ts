import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { CartItem } from './product-detail/cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService extends BaseService<CartItem> {
  totalAmount: number = 0;
  constructor() {
    super('');
  }

  addToCart(product: CartItem) {
    this.data.push(product);
    this.totalAmount += product.amount;
  }
}
