import { Component } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-gift-finder-step-one',
  templateUrl: './gift-finder-step-one.component.html',
  styleUrls: ['./gift-finder-step-one.component.scss'],
})
export class GiftFinderStepOneComponent {
  value: number = 20;
  maxValue: number = 30;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 10,
    showTicks: true,
    showTicksValues: true,
    animate: true,
  };
}
