import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(public cartService: CartService) {}
}
