import { Validators } from '@angular/forms';
import { TypeStorePaymentMethodProviderService } from './../type-store-payment-method-provider/type-store-payment-method-provider.service';
import { Component } from '@angular/core';
import { BaseCreateComponent } from 'src/app/shared/base-component';
import { StorePaymentMethod } from '../store-payment-method.model';
import { StorePaymentMethodService } from '../store-payment-method.service';
import { StorePaymentMethodProviderService } from '../store-payment-method-provider/store-payment-method-provider.service';
import { TypeStorePaymentMethodProvider } from '../type-store-payment-method-provider/type-store-payment-method-provider.model';
import { StorePaymentMethodProvider } from '../store-payment-method-provider/store-payment-method-provider.model';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-store-payment-method-create',
  templateUrl: './store-payment-method-create.component.html',
  styleUrls: ['./store-payment-method-create.component.scss'],
})
export class StorePaymentMethodCreateComponent extends BaseCreateComponent<StorePaymentMethod> {
  typePaymentList: TypeStorePaymentMethodProvider[] = [];
  paymentMethodProviderList: StorePaymentMethodProvider[] = [];

  constructor(
    public storePaymentMethodService: StorePaymentMethodService,
    public typePaymentMethodService: TypeStorePaymentMethodProviderService,
    public paymentMethodProviderService: StorePaymentMethodProviderService,
    public authService: AuthService
  ) {
    super(storePaymentMethodService);
  }

  initForm(): void {
    this.form = this.fb.group({
      store_id: [null, [Validators.required]],
      type_payment_method_provider_id: [null, [Validators.required]],
      payment_method_provider_id: [null, [Validators.required]],
      account_number: [null, [Validators.required]],
    });

    this.form.controls[
      'type_payment_method_provider_id'
    ].valueChanges.subscribe((value) => {
      if (value) {
        this.paymentMethodProviderService
          .getByTypePaymentMethodProviderId(value)
          .subscribe((response) => {
            this.paymentMethodProviderList = response;
          });
      }
    });
  }

  ngOnInit(): void {
    this.initForm();

    if (this.authService.shop) {
      this.form.controls['store_id'].setValue(this.authService.shop.id);
    } else {
      this.helper.notification.alertDanger('You must create a store first!');
      this.router.navigate(['/']);
    }

    this.typePaymentMethodService.get().subscribe((response) => {
      this.typePaymentList = response;
    });
  }

  override create() {
    if (this.form.invalid) {
      this.helper.notification.alertDanger('Invalid form!');
      return;
    }

    this.loading = true;
    const data = {
      ...this.form.value,
      payment_method_provider_id: Number(
        this.form.value.payment_method_provider_id
      ),
    };

    this.storePaymentMethodService.store(data).subscribe(() => {
      this.loading = false;
      this.form.reset();
      this.helper.notification.alertSuccess('Created successfully!');
      // this.router.navigate(['/']);
    });
  }
}
