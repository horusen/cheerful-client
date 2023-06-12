import { Validators } from '@angular/forms';
import { Component, Output, EventEmitter } from '@angular/core';
import { BaseCreateComponent } from '../shared/base-component';
import { CardsService } from '../main/cards.service';
import { CartService } from '../main/cart.service';
import { countries } from '../mocks/countries.mock';
import { states } from '../mocks/states.mock';
import { cities } from '../mocks/cities.mock';

@Component({
  selector: 'app-add-recipient-details',
  templateUrl: './add-recipient-details.component.html',
  styleUrls: ['./add-recipient-details.component.scss'],
})
export class AddRecipientDetailsComponent extends BaseCreateComponent<any> {
  countryList: any[] = [];
  stateList: any[] = [];
  cityList: any[] = [];
  @Output() recipientDetails = new EventEmitter<any>();
  constructor(
    public cardService: CardsService,
    public cartService: CartService
  ) {
    super(cardService);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      card: [
        this.cartService.cart || this.cartService.data[0]?.product,
        [Validators.required],
      ],
      amount: [this.cartService.totalAmount, [Validators.required]],
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
    // console.log(this.form.value);

    // if (this.form.invalid) {
    //   this.helper.notification.alertDanger('Invalid form');
    //   return;
    // }
    this.recipientDetails.emit(this.form.value);
    this.form.reset();
  }
}
