import { cities } from './../../mocks/cities.mock';
import { Component } from '@angular/core';
import { BaseCreateComponent } from 'src/app/shared/base-component';
import { CardsService } from '../cards.service';
import { Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { countries } from 'src/app/mocks/countries.mock';
import { states } from 'src/app/mocks/states.mock';
import { OrderService } from 'src/app/order/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent extends BaseCreateComponent<any> {
  constructor(
    public cardService: CardsService,
    public cartService: CartService,
    public orderService: OrderService
  ) {
    super(cardService);
  }

  add(recipientDetails: any) {
    this.orderService.processing$.next(true);
    this.orderService.store(recipientDetails).subscribe((res) => {
      this.orderService.processing$.next(false);
      this.helper.notification.alertSuccess(
        'Congratulations!',
        'You card has been successfully sent.'
      );
      this.router.navigate(['/']);
    });
  }
}
