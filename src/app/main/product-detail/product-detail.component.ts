import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { BaseSingleComponent } from 'src/app/shared/base-component';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CardsService } from '../cards.service';
import { StoreService } from 'src/app/store/store.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent
  extends BaseSingleComponent<any>
  implements OnInit
{
  amounts: any[] = [];
  selectedAmount: number = 0;
  constructor(
    public storeService: StoreService,
    public cartService: CartService,
    public cardService: CardsService,
    public override route: ActivatedRoute,
    public router: Router
  ) {
    super(storeService);
  }

  override ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.loading = true;
      this.storeService.show(params['id']).subscribe((single) => {
        if (single) {
          this.selectedAmount = single.card_min_price!;
          for (let i = 0; i <= 2; i++) {
            this.amounts.push(single.card_min_price! + i * 100);
          }
        }
        this.loading = false;
      });
    });
    // this.route.paramMap.subscribe((params) => {
    //   this.storeService.getSingle(params.get('productId')!);
    //   this.amounts.push(this.storeService.singleData.minPrice);
    //   this.selectedAmount = this.storeService.singleData.minPrice;
    //   for (let i = 1; i <= 3; i++) {
    //     this.amounts.push(this.storeService.singleData.minPrice + i * 100);
    //   }
    // });
  }

  changeAmount(amount: number) {
    this.selectedAmount = amount;
  }

  addToCart() {
    this.cartService.addToCart({
      product: this.storeService.singleData,
      amount: this.selectedAmount,
    });
    this.helper.notification.toastSuccess();
  }

  async buyCard(content: any) {
    this.cartService.addToCart({
      product: this.storeService.singleData,
      amount: this.selectedAmount,
    });

    this.router.navigate(['/checkout']);
  }

  async buyNow(recipientDetails: any) {
    this.cardService.data.push();
    this.helper.modal.hide('buy-card-modal');
    this.helper.notification.alertSuccess('Card purchased successfully');
    this.cartService.cart = null;
  }
}
