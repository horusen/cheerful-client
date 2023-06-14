import { ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { GiftFinder } from './gift-finder.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GiftFinderTypeGift } from './gift-finder-type-gift.enum';
import { GiftFinderTypeReceiver } from './gift-finder-type-receiver.enum';
import { GiftFinderOccasion } from './gift-finder-occasion.enum';
import { StoreService } from '../store/store.service';

@Injectable({
  providedIn: 'root',
})
export class GiftFinderService extends BaseService<GiftFinder> {
  public form: FormGroup;
  formValue$ = new ReplaySubject<GiftFinder>(1);

  constructor(public fb: FormBuilder, public storeService: StoreService) {
    super('gift-finder');
    this.form = this.fb.group({
      type_receiver: [GiftFinderTypeReceiver.FAMILY, [Validators.required]],
      min_age_receiver: [20, [Validators.required]],
      max_age_receiver: [30, [Validators.required]],
      interests: [[], [Validators.required]],
      occasion: [GiftFinderOccasion.HOLIDAY, [Validators.required]],
      type_gift: [GiftFinderTypeGift.ANY, [Validators.required]],
      budget: [0, [Validators.required]],
    });

    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  sendFindings() {
    return this.storeService.get({ params: this.form.value });
  }
}
