import { Component } from '@angular/core';
import { BaseSingleComponent } from 'src/app/shared/base-component';
import { Store } from 'src/app/store/store.model';
import { StoreService } from 'src/app/store/store.service';

@Component({
  selector: 'app-storefront-giftcard',
  templateUrl: './storefront-giftcard.component.html',
  styleUrls: ['./storefront-giftcard.component.scss'],
})
export class StorefrontGiftcardComponent extends BaseSingleComponent<Store> {
  amounts: any[] = [];
  selectedAmount: number = 0;
  constructor(public storeService: StoreService) {
    super(storeService);
  }

  override ngOnInit(): void {
    this.subscriptions['store'] = this.storeService.singleData$.subscribe(
      (store) => {
        this.single = store;
        this.selectedAmount = this.single?.card_min_price!;
        for (let i = 0; i <= 2; i++) {
          this.amounts.push(this.single?.card_min_price! + i * 100);
        }
      }
    );
  }

  changeAmount(amount: number) {
    // this.selectedAmount = amount;
  }

  addToCart() {
    // this.cartService.addToCart({
    //   product: this.storeService.singleData,
    //   amount: this.selectedAmount,
    // });
    // this.helper.notification.toastSuccess();
  }

  async buyCard(content: any) {
    // this.cartService.addToCart({
    //   product: this.storeService.singleData,
    //   amount: this.selectedAmount,
    // });
    // this.router.navigate(['/checkout']);
  }

  async buyNow(recipientDetails: any) {
    // this.cardService.data.push();
    // this.helper.modal.hide('buy-card-modal');
    // this.helper.notification.alertSuccess('Card purchased successfully');
    // this.cartService.cart = null;
  }
}
