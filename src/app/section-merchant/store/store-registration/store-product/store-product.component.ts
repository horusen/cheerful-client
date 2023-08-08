import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base-component';
import { StoreProductService } from './store-product.service';
import { StoreProduct } from './store-product.model';
import { Store } from '../../store.model';
import { StoreService } from '../../store.service';

@Component({
  selector: 'app-store-product',
  templateUrl: './store-product.component.html',
  styleUrls: ['./store-product.component.scss'],
})
export class StoreProductComponent extends BaseComponent<StoreProduct> {
  constructor(
    public storeProductService: StoreProductService,
    public storeService: StoreService
  ) {
    super(storeProductService);
  }

  ngOnInit() {
    this.subscriptions['getByStore'] = this.storeService.singleData$.subscribe(
      (store) => {
        if (store) this.getByStore(store);
      }
    );
  }

  getByStore(store: Store) {
    this.loading = true;
    this.storeProductService.getByStoreId(store.id!).subscribe((response) => {
      this.loading = false;
    });
  }
}
