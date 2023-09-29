import { TestBed } from '@angular/core/testing';

import { StoreRegistrationService } from './store-registration.service';

describe('StoreRegistrationService', () => {
  let service: StoreRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
