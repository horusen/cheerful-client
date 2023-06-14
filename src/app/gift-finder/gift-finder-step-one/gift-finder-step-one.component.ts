import { Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { GiftFinderService } from '../gift-finder.service';
import { BaseCreateComponent } from 'src/app/shared/base-component';
import { GiftFinder } from '../gift-finder.model';
import { GiftFinderTypeReceiver } from '../gift-finder-type-receiver.enum';

@Component({
  selector: 'app-gift-finder-step-one',
  templateUrl: './gift-finder-step-one.component.html',
  styleUrls: ['./gift-finder-step-one.component.scss'],
})
export class GiftFinderStepOneComponent extends BaseCreateComponent<GiftFinder> {
  value: number;
  maxValue: number;
  typeReceiver: GiftFinderTypeReceiver = GiftFinderTypeReceiver.FAMILY;

  options: Options = {
    floor: 0,
    ceil: 100,
    step: 10,
    showTicks: true,
    showTicksValues: true,
    animate: true,
  };

  get typeReceiverEnum() {
    return GiftFinderTypeReceiver;
  }

  constructor(public giftFinderService: GiftFinderService) {
    super(giftFinderService);
    this.value = this.giftFinderService.form.controls['min_age_receiver'].value;
    this.maxValue =
      this.giftFinderService.form.controls['max_age_receiver'].value;
  }

  ngOnInit(): void {
    this.giftFinderService.form.valueChanges.subscribe((value) => {
      this.value = value.min_age_receiver;
      this.maxValue = value.max_age_receiver;
    });
  }
}
