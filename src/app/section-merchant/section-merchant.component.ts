import { Component } from '@angular/core';
import { BaseComponent } from '../shared/base-component';
import { Store } from './store/store.model';

@Component({
  selector: 'app-section-merchant',
  templateUrl: './section-merchant.component.html',
  styleUrls: ['./section-merchant.component.scss'],
})
export class SectionMerchantComponent extends BaseComponent<Store> {
  constructor() {
    super();
  }
}
