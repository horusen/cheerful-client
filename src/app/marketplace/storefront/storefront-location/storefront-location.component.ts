import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreAddress } from 'src/app/section-merchant/store/store-registration/store-registration-address/store-address.model';
import { StoreRegistrationAddressService } from 'src/app/section-merchant/store/store-registration/store-registration-address/store-registration-address.service';
import { Store } from 'src/app/section-merchant/store/store.model';
import { StoreService } from 'src/app/section-merchant/store/store.service';
import { BaseListComponent } from 'src/app/shared/base-component';

@Component({
  selector: 'app-storefront-location',
  templateUrl: './storefront-location.component.html',
  styleUrls: ['./storefront-location.component.scss'],
})
export class StorefrontLocationComponent extends BaseListComponent<StoreAddress> {
  constructor(
    public storeAddressService: StoreRegistrationAddressService,
    public storeService: StoreService
  ) {
    super(storeAddressService);
  }

  override ngOnInit(): void {
    this.subscriptions['store'] = this.storeService.singleData$.subscribe(
      (store: Store | undefined | null) => {
        if (store) {
          this.getByStore(store);
        }
      }
    );
  }

  getByStore(store: Store) {
    this.loading = true;
    this.storeAddressService.getByStoreId(store.id!).subscribe(() => {
      this.loading = false;
    });
  }
}
