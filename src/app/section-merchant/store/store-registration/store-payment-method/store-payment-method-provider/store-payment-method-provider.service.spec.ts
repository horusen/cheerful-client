import { TestBed } from '@angular/core/testing';

import { StorePaymentMethodProviderService } from './store-payment-method-provider.service';

describe('StorePaymentMethodProviderService', () => {
  let service: StorePaymentMethodProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorePaymentMethodProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
