import { TestBed } from '@angular/core/testing';

import { PointTransferService } from './point-transfer.service';

describe('PointTransferService', () => {
  let service: PointTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PointTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
