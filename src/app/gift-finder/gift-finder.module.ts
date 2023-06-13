import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftFinderComponent } from './gift-finder.component';
import { SharedModule } from '../shared/shared.module';
import { GiftFinderStepOneComponent } from './gift-finder-step-one/gift-finder-step-one.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { GiftFinderStepTwoComponent } from './gift-finder-step-two/gift-finder-step-two.component';
import { GiftFinderStepThreeComponent } from './gift-finder-step-three/gift-finder-step-three.component';
import { GiftFinderStepFourComponent } from './gift-finder-step-four/gift-finder-step-four.component';

@NgModule({
  declarations: [GiftFinderComponent, GiftFinderStepOneComponent, GiftFinderStepTwoComponent, GiftFinderStepThreeComponent, GiftFinderStepFourComponent],
  imports: [CommonModule, SharedModule, NgxSliderModule],
  exports: [GiftFinderComponent],
})
export class GiftFinderModule {}
