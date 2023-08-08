import { Component } from '@angular/core';
import { Store } from 'src/app/section-merchant/store/store.model';
import { StoreService } from 'src/app/section-merchant/store/store.service';
import { BaseComponent } from 'src/app/shared/base-component';

@Component({
  selector: 'app-dashboard-marketplace-store',
  templateUrl: './dashboard-marketplace-store.component.html',
  styleUrls: ['./dashboard-marketplace-store.component.scss'],
})
export class DashboardMarketplaceStoreComponent extends BaseComponent<Store> {
  constructor(public storeService: StoreService) {
    super(storeService);
  }

  ngOnInit(): void {
    this.storeService.get().subscribe((data) => {
      this.data = data;
    });
  }
}
