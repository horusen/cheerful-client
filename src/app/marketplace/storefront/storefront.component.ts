import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from 'src/app/section-merchant/store/store.model';
import { StoreService } from 'src/app/section-merchant/store/store.service';
import { BaseComponent } from 'src/app/shared/base-component';
import { GiftCardService } from '../gift-card/gift-card.service';

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.scss'],
})
export class StorefrontComponent extends BaseComponent<Store> {
  @ViewChild('giftCardShow', { static: false }) giftCardModal!: ElementRef;
  store: Store | undefined;

  constructor(
    public storeService: StoreService,
    public route: ActivatedRoute,
    public giftCardService: GiftCardService
  ) {
    super();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.getStore(params['id']);
    });

    this.giftCardService.singleData$.subscribe(() => {
      this.openModal(this.giftCardModal);
    });
  }

  getStore(id: number) {
    this.loading = true;
    this.subscriptions['stores'] = this.storeService.show(id).subscribe(() => {
      this.store = this.storeService.singleData;
      this.loading = false;
    });
  }
}
