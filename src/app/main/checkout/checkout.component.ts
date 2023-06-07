import { cities } from './../../mocks/cities.mock';
import { Component } from '@angular/core';
import { BaseCreateComponent } from 'src/app/shared/base-component';
import { CardsService } from '../cards.service';
import { Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { countries } from 'src/app/mocks/countries.mock';
import { states } from 'src/app/mocks/states.mock';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent extends BaseCreateComponent<any> {
  constructor(
    public cardService: CardsService,
    public cartService: CartService
  ) {
    super(cardService);
  }

  add(recipientDetails: any) {
    // if (this.form.invalid) return;
    this.cardService.data.push(recipientDetails);
    this.helper.notification.alertSuccess(
      'Congratulations!',
      'You card has been successfully sent.',
      3000
    );
    this.cartService.data = [];
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2000);
  }
}
