import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base-component';
import { StoreCard } from './store-card.model';
import { StoreCardService } from './store-card.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss'],
})
export class StoreCardComponent extends BaseComponent<StoreCard> {
  constructor(
    public storeCardService: StoreCardService,
    public storeService: StoreService
  ) {
    super();
  }

  ngOnInit(): void {
    this.storeService.singleData$.subscribe((store) => {
      if (store) {
        this.storeCardService.getByStoreId(store.id!).subscribe((data) => {
          this.data = data;
        });
      }
    });
  }
}
