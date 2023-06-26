import { Component } from '@angular/core';
import { BaseSingleComponent } from 'src/app/shared/base-component';
import { Store } from 'src/app/store/store.model';
import { StoreService } from 'src/app/store/store.service';

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
