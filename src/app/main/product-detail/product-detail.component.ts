import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { BaseSingleComponent } from 'src/app/shared/base-component';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

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
    public productService: ProductService,
    public cartService: CartService,
    public override route: ActivatedRoute
  ) {
    super(productService);
  }

  override ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productService.getSingle(params.get('productId')!);
      this.amounts.push(this.productService.singleData.minPrice);
      this.selectedAmount = this.productService.singleData.minPrice;
      for (let i = 1; i <= 3; i++) {
        this.amounts.push(this.productService.singleData.minPrice + i * 100);
      }
    });
  }

  changeAmount(amount: number) {
    this.selectedAmount = amount;
  }

  addToCart() {
    this.cartService.addToCart({
      product: this.productService.singleData,
      amount: this.selectedAmount,
    });
    this.helper.notification.toastSuccess();
  }
}