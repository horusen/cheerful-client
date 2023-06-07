import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { BaseComponent } from 'src/app/shared/base-component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BaseComponent<any> {
  constructor(public productService: ProductService) {
    super();
    this.data = productService.data.slice(0, 4);
  }
}
