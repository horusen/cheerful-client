import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent {
  constructor(public productService: ProductService) {}
}
