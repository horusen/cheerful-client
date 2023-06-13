import { TestBed } from '@angular/core/testing';

import { StorePaymentMethodService } from './store-payment-method.service';

describe('StorePaymentMethodService', () => {
  let service: StorePaymentMethodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorePaymentMethodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
