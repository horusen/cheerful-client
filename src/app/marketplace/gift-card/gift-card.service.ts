import { Injectable } from '@angular/core';
import { Store } from 'src/app/section-merchant/store/store.model';
import { BaseService } from 'src/app/shared/services';

@Injectable({
  providedIn: 'root',
})
export class GiftCardService extends BaseService<any> {
  constructor() {
    super('');
  }

  generate(userId: number, store: Store, amount: number) {
    const code = Math.floor(100000 + Math.random() * 900000);
    this.singleData = {
      code,
      user_id: userId,
      store,
      amount,
    };
  }
}
