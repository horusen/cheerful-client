import { Component } from '@angular/core';
import { BaseService } from 'src/app/shared/services';
import { StoreAddress } from './store-address.model';
import {
  BaseComponent,
  BaseContainerComponent,
} from 'src/app/shared/base-component';
import { StoreRegistrationAddressService } from './store-registration-address.service';
import { ActivatedRoute } from '@angular/router';
import { Store } from '../../store.model';
import { AuthService } from 'src/app/auth/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-store-registration-address',
  templateUrl: './store-registration-address.component.html',
  styleUrls: ['./store-registration-address.component.scss'],
})
export class StoreRegistrationAddressComponent extends BaseContainerComponent<StoreAddress> {
  store!: Store;

  constructor(
    public storeAddressService: StoreRegistrationAddressService,
    public override route: ActivatedRoute,
    public authService: AuthService
  ) {
    super(storeAddressService, route, '');
  }

  override ngOnInit(): void {
    this.store = this.authService.shop;
    this.getAddressesByStoreId(this.store.id!);
  }

  getAddressesByStoreId(storeId: number) {
    this.loading = true;
    this.storeAddressService.getByStoreId(storeId).subscribe((response) => {
      this.loading = false;
      this.data = response;
    });
  }
}
