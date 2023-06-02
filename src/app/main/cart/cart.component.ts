import { CartItem } from './../product-detail/cart-item.model';
import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from 'src/app/shared/base-component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent
  extends BaseListComponent<CartItem>
  implements OnInit
{
  constructor(public cartService: CartService) {
    super(cartService);
  }

  override ngOnInit(): void {
    this.data = this.cartService.data;
  }
}
