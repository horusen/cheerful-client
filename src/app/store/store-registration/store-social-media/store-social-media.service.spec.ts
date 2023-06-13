import { TestBed } from '@angular/core/testing';

import { StoreSocialMediaService } from './store-social-media.service';

describe('StoreSocialMediaService', () => {
  let service: StoreSocialMediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreSocialMediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
