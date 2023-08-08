import { Component, OnInit } from '@angular/core';
import { BaseSingleComponent } from 'src/app/shared/base-component';
import { GiftCardService } from '../gift-card.service';

@Component({
  selector: 'app-gift-card-show',
  templateUrl: './gift-card-show.component.html',
  styleUrls: ['./gift-card-show.component.scss'],
})
export class GiftCardShowComponent
  extends BaseSingleComponent<any>
  implements OnInit
{
  showCode: boolean = false;
  toggleDisplayCode() {
    this.showCode = !this.showCode;
  }

  constructor(public giftService: GiftCardService) {
    super(giftService);
  }

  override ngOnInit(): void {
    this.single = this.giftService.singleData;
  }
}
