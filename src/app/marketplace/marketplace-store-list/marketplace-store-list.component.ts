import { Component } from '@angular/core';
import { Store } from 'src/app/section-merchant/store/store.model';
import { StoreService } from 'src/app/section-merchant/store/store.service';
import { BaseComponent } from 'src/app/shared/base-component';

@Component({
  selector: 'app-marketplace-store-list',
  templateUrl: './marketplace-store-list.component.html',
  styleUrls: ['./marketplace-store-list.component.scss'],
})
export class MarketplaceStoreListComponent extends BaseComponent<Store> {
  constructor(public storeService: StoreService) {
    super();
  }

  ngOnInit(): void {
    this.storeService.get().subscribe((data) => {
      this.data = data;
    });
  }
}
