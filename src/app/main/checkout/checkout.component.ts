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
  countryList: any[] = [];
  stateList: any[] = [];
  cityList: any[] = [];
  constructor(
    public cardService: CardsService,
    public cartService: CartService
  ) {
    super(cardService);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      card: [this.cartService.data[0]?.product, [Validators.required]],
      recipient_name: ['', [Validators.required]],
      recipient_phone_number: ['', [Validators.required]],
      recipient_country: ['', [Validators.required]],
      recipient_state: ['', [Validators.required]],
      recipient_address: ['', [Validators.required]],
      recipient_city: ['', [Validators.required]],
      recipient_postal: ['', [Validators.required]],
      additional_comments: ['', [Validators.required]],
      scheduled_time: ['', [Validators.required]],
    });

    this.countryList = countries;

    this.form.get('recipient_country')?.valueChanges.subscribe((value) => {
      this.stateList = states.filter((state) => state.country == value);
    });

    this.form.get('recipient_state')?.valueChanges.subscribe((value) => {
      this.cityList = cities.filter((city) => city.state == value);
      console.log(this.cityList);
    });
  }

  add() {
    console.log(this.form.value);

    // if (this.form.invalid) return;

    this.cardService.store(this.form.value);
    this.helper.notification.toastSuccess();
    this.router.navigate(['/']);
  }
}
