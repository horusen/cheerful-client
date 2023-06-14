import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base-component';
import { GiftFinder } from '../gift-finder.model';
import { GiftFinderService } from '../gift-finder.service';
import { GiftFinderOccasion } from '../gift-finder-occasion.enum';
import { GiftFinderTypeGift } from '../gift-finder-type-gift.enum';

@Component({
  selector: 'app-gift-finder-step-three',
  templateUrl: './gift-finder-step-three.component.html',
  styleUrls: ['./gift-finder-step-three.component.scss'],
})
export class GiftFinderStepThreeComponent extends BaseComponent<GiftFinder> {
  ANY_AMOUNT = 0;
  LESS_THAN_200 = -1;
  MORE_THAN_600 = -2;
  get typeOccasionEnum() {
    return GiftFinderOccasion;
  }

  get typeGiftEnum() {
    return GiftFinderTypeGift;
  }

  constructor(public giftFinderService: GiftFinderService) {
    super();
  }
}
