import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { BaseSingleComponent } from 'src/app/shared/base-component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent
  extends BaseSingleComponent<any>
  implements OnInit
{
  constructor(
    public productService: ProductService,
    public override route: ActivatedRoute
  ) {
    super(productService);
  }

  override ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productService.getSingle(params.get('productId')!);
    });
  }
}
