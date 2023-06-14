import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base-component';
import { GiftFinder } from '../gift-finder.model';
import { GiftFinderService } from '../gift-finder.service';
import { GiftFinderInterest } from '../gift-finder-interest.type';

@Component({
  selector: 'app-gift-finder-step-two',
  templateUrl: './gift-finder-step-two.component.html',
  styleUrls: ['./gift-finder-step-two.component.scss'],
})
export class GiftFinderStepTwoComponent extends BaseComponent<GiftFinder> {
  constructor(public giftFinderService: GiftFinderService) {
    super();
  }

  toggleInterest(element: GiftFinderInterest) {
    const interests = this.giftFinderService.form.controls['interests'].value;
    const index = interests.indexOf(element);
    if (index > -1) {
      interests.splice(index, 1);
    } else {
      {
        interests.push(element);
      }
      this.giftFinderService.form.controls['interests'].patchValue(interests);
    }
  }
}
