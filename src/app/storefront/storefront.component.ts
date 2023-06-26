import { Component } from '@angular/core';
import { BaseComponent } from '../shared/base-component';
import { Store } from '../store/store.model';
import { StoreService } from '../store/store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.scss'],
})
export class StorefrontComponent extends BaseComponent<Store> {
  store: Store | undefined;

  constructor(public storeService: StoreService, public route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.getByStoreLink(params['storeLink']);
    });
  }

  getByStoreLink(storeLink: string) {
    this.loading = true;
    this.subscriptions['stores'] = this.storeService
      .getByStoreLink(storeLink)
      .subscribe(() => {
        this.store = this.storeService.singleData;
        this.loading = false;
      });
  }
}
