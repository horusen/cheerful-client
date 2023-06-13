import { TestBed } from '@angular/core/testing';

import { GiftFinderService } from './gift-finder.service';

describe('GiftFinderService', () => {
  let service: GiftFinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiftFinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
