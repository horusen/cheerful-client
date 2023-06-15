import { Validators } from '@angular/forms';
import { Component, Output, EventEmitter } from '@angular/core';
import { BaseCreateComponent } from '../shared/base-component';
import { CardsService } from '../main/cards.service';
import { CartService } from '../main/cart.service';
import { countries } from '../mocks/countries.mock';
import { states } from '../mocks/states.mock';
import { cities } from '../mocks/cities.mock';
import { OrderService } from '../order/order.service';

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
    public cartService: CartService,
    public orderService: OrderService
  ) {
    super(cardService);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      store_id: [this.cartService.data[0]?.product.id, [Validators.required]],
      amount: [this.cartService.totalAmount, [Validators.required]],
      recipient_name: ['', [Validators.required]],
      recipient_phone_number: ['', [Validators.required]],
      // recipient_email: ['', [Validators.required]],
      additional_comments: ['', [Validators.required]],
      scheduled_time: ['', [Validators.required]],
    });

    this.subscriptions['orderProcessing'] =
      this.orderService.processing$.subscribe((processing) => {
        this.loading = processing;
        if (processing == false) {
          this.form.reset();
        }
      });
  }

  add() {
    if (this.form.invalid) {
      this.helper.notification.alertDanger('Invalid form');
      return;
    }

    this.fillFormData(this.form.value);
    this.recipientDetails.emit(this.formData);
  }
}
