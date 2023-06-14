import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base-component';
import { GiftFinder } from '../gift-finder.model';
import { GiftFinderService } from '../gift-finder.service';

@Component({
  selector: 'app-gift-finder-step-four',
  templateUrl: './gift-finder-step-four.component.html',
  styleUrls: ['./gift-finder-step-four.component.scss'],
})
export class GiftFinderStepFourComponent extends BaseComponent<GiftFinder> {
  constructor(public GiftFinderService: GiftFinderService) {
    super();
  }

  ngOnInit(): void {
    this.GiftFinderService.sendFindings().subscribe((data) => {
      console.log(data);
    });
  }
}
