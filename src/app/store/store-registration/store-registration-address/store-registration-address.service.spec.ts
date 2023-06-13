import { TestBed } from '@angular/core/testing';

import { StoreRegistrationAddressService } from './store-registration-address.service';

describe('StoreRegistrationAddressService', () => {
  let service: StoreRegistrationAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreRegistrationAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
