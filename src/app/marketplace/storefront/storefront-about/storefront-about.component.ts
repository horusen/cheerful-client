import { Component } from '@angular/core';
import { Store } from 'src/app/section-merchant/store/store.model';
import { StoreService } from 'src/app/section-merchant/store/store.service';
import { BaseSingleComponent } from 'src/app/shared/base-component';

@Component({
  selector: 'app-storefront-about',
  templateUrl: './storefront-about.component.html',
  styleUrls: ['./storefront-about.component.scss'],
})
export class StorefrontAboutComponent extends BaseSingleComponent<Store> {
  constructor(public storeService: StoreService) {
    super(storeService);
  }
}
