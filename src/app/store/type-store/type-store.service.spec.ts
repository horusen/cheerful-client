import { TestBed } from '@angular/core/testing';

import { TypeStoreService } from './type-store.service';

describe('TypeStoreService', () => {
  let service: TypeStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
