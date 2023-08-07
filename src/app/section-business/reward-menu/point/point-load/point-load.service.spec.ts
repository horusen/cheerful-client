import { TestBed } from '@angular/core/testing';

import { PointLoadService } from './point-history.service';

describe('PointLoadService', () => {
  let service: PointLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PointLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
