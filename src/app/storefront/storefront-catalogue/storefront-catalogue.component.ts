import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base-component';
import { StoreProductComponent } from 'src/app/store/store-registration/store-product/store-product.component';
import { StoreProduct } from 'src/app/store/store-registration/store-product/store-product.model';

@Component({
  selector: 'app-storefront-catalogue',
  templateUrl: './storefront-catalogue.component.html',
  styleUrls: ['./storefront-catalogue.component.scss'],
})
export class StorefrontCatalogueComponent extends StoreProductComponent {}
