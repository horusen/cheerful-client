import { Component } from '@angular/core';
import { StoreProductComponent } from 'src/app/section-merchant/store/store-registration/store-product/store-product.component';
import { BaseComponent } from 'src/app/shared/base-component';

@Component({
  selector: 'app-storefront-catalogue',
  templateUrl: './storefront-catalogue.component.html',
  styleUrls: ['./storefront-catalogue.component.scss'],
})
export class StorefrontCatalogueComponent extends StoreProductComponent {}
