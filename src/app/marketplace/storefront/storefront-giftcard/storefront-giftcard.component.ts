import { Component } from '@angular/core';
import { Store } from 'src/app/section-merchant/store/store.model';
import { StoreService } from 'src/app/section-merchant/store/store.service';
import { BaseSingleComponent } from 'src/app/shared/base-component';
import { GiftCardService } from '../../gift-card/gift-card.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-storefront-giftcard',
  templateUrl: './storefront-giftcard.component.html',
  styleUrls: ['./storefront-giftcard.component.scss'],
})
export class StorefrontGiftcardComponent extends BaseSingleComponent<Store> {
  amounts: any[] = [];
  selectedAmount: number = 0;
  constructor(
    public storeService: StoreService,
    public giftCardService: GiftCardService,
    public authService: AuthService
  ) {
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
    this.selectedAmount = amount;
  }

  addToCart() {
    this.helper.notification.confirm(
      'Are you sure?',
      `Are you sure you want to exchange ${(this.selectedAmount / 0.9).toFixed(
        2
      )} points for this a GHC ${this.selectedAmount} ${
        this.single?.name
      } gift card`,
      () => {
        this.giftCardService.generate(
          this.authService.user.id!,
          this.single!,
          this.selectedAmount
        );
      }
    );
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
