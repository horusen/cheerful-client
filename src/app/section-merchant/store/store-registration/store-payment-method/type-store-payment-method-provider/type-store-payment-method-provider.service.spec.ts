import { TestBed } from '@angular/core/testing';

import { TypeStorePaymentMethodProviderService } from './type-store-payment-method-provider.service';

describe('TypeStorePaymentMethodProviderService', () => {
  let service: TypeStorePaymentMethodProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeStorePaymentMethodProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
