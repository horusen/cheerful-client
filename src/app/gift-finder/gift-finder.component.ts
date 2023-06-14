import { Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { BaseCreateComponent } from '../shared/base-component';
import { GiftFinderService } from './gift-finder.service';
import { GiftFinder } from './gift-finder.model';

@Component({
  selector: 'app-gift-finder',
  templateUrl: './gift-finder.component.html',
  styleUrls: ['./gift-finder.component.scss'],
})
export class GiftFinderComponent extends BaseCreateComponent<GiftFinder> {
  activeStep: 1 | 2 | 3 | 4 = 1;
  constructor(public giftFinderService: GiftFinderService) {
    super(giftFinderService);
  }

  ngOnInit(): void {
    this.initForm();

    this.subscriptions['form'] = this.giftFinderService.formValue$.subscribe(
      (values) => {
        this.form.patchValue(values);
      }
    );
  }

  initForm(): void {
    this.form = this.fb.group({
      type_receiver: [null, [Validators.required]],
      min_age_receiver: [null, [Validators.required]],
      max_age_receiver: [null, [Validators.required]],
      interests: [null, [Validators.required]],
      occasion: [null, [Validators.required]],
      type_gift: [null, [Validators.required]],
      budget: [null, [Validators.required]],
    });
  }

  override create(): void {
    if (this.form.invalid) {
      this.helper.notification.alertDanger('Please fill in all fields');
      return;
    }

    console.log(this.form.value);
  }

  next() {
    this.activeStep++;
  }

  prev() {
    this.activeStep--;
  }
}
