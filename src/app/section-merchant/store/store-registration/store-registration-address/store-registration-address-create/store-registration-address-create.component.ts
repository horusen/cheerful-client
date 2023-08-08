import { Component } from '@angular/core';
import { BaseCreateComponent } from 'src/app/shared/base-component';
import { StoreAddress } from '../store-address.model';
import { Validators } from '@angular/forms';
import { StoreRegistrationAddressService } from '../store-registration-address.service';

import { CountryService } from 'src/app/common/country/country.service';

import { AuthService } from 'src/app/auth/auth.service';
import { Country } from 'src/app/common/country/country.model';
import { StoreService } from '../../../store.service';
import { StateService } from 'src/app/common/state/state.service';
import { State } from 'src/app/common/state/state.model';

@Component({
  selector: 'app-store-registration-address-create',
  templateUrl: './store-registration-address-create.component.html',
  styleUrls: ['./store-registration-address-create.component.scss'],
})
export class StoreRegistrationAddressCreateComponent extends BaseCreateComponent<StoreAddress> {
  countryList: Country[] = [];
  stateList: State[] = [];

  constructor(
    public storeAddressService: StoreRegistrationAddressService,
    public storeService: StoreService,
    public countryService: CountryService,
    public stateService: StateService,
    public authService: AuthService
  ) {
    super(storeAddressService);
  }

  initForm() {
    this.form = this.fb.group({
      store_id: [null, [Validators.required]],
      country_id: [null, [Validators.required]],
      state_id: [null, [Validators.required]],
      address: ['', [Validators.required]],
      google_maps_link: ['', [Validators.required]],
    });

    this.form.controls['country_id'].valueChanges.subscribe((value) => {
      if (value) this.stateService.getByCountryId(value).subscribe();
    });
  }

  ngOnInit(): void {
    this.initForm();

    if (this.authService.shop) {
      this.form.patchValue({ store_id: this.authService.shop.id });
    } else {
      this.helper.notification.alertDanger(
        'Please register your store first!',
        '',
        4000
      );
      this.router.navigate(['/']);
    }

    this.stateService.get().subscribe();
    this.countryService.get().subscribe();

    this.countryService.data$.subscribe((data) => {
      this.countryList = data;
    });

    this.stateService.data$.subscribe((data) => {
      this.stateList = data;
    });

    this.storeService.singleData$.subscribe((data) => {
      this.form.patchValue({
        store_id: data?.id,
      });
    });
  }

  override create() {
    if (this.form.invalid) {
      this.helper.notification.alertDanger('Invalid form, please check again!');
      return;
    }

    this.loading = true;
    const data = {
      ...this.form.value,
      country_id: Number(this.form.value.country_id),
      state_id: Number(this.form.value.state_id),
      city_id: Number(this.form.value.city_id),
    };

    this.storeAddressService.store(data).subscribe((response) => {
      this.loading = false;
      this.helper.notification.alertSuccess();
      this.form.reset();
      // this.router.navigate(['/store-registration']);
    });
  }
}
