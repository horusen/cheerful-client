import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { CartItem } from './product-detail/cart-item.model';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService extends BaseService<CartItem> {
  totalAmount: number = 0;
  private _cart: CartItem | null = null;
  public cart$ = new ReplaySubject<CartItem | null>(1);

  set cart(value: CartItem | null) {
    this._cart = value;
    this.cart$.next(value);
  }
  constructor() {
    super('');
  }

  addToCart(product: CartItem) {
    this.data.push(product);
    this.totalAmount += product.amount;
  }
}
