import { Component } from '@angular/core';
import {
  BaseComponent,
  BaseContainerComponent,
} from 'src/app/shared/base-component';
import { StorePaymentMethod } from './store-payment-method.model';
import { StorePaymentMethodService } from './store-payment-method.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-store-payment-method',
  templateUrl: './store-payment-method.component.html',
  styleUrls: ['./store-payment-method.component.scss'],
})
export class StorePaymentMethodComponent extends BaseContainerComponent<StorePaymentMethod> {
  constructor(
    public storePaymentService: StorePaymentMethodService,
    public authService: AuthService,
    public override route: ActivatedRoute
  ) {
    super(storePaymentService, route, '');
  }

  override ngOnInit(): void {
    this.getByStoreId(this.authService.shop.id!);
  }

  getByStoreId(storeId: number) {
    this.loading = true;
    this.storePaymentService.getByStoreId(storeId).subscribe((response) => {
      this.loading = false;
      this.data = response;
    });
  }
}
