import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointTransferListComponent } from './point-transfer-list.component';

describe('PointTransferListComponent', () => {
  let component: PointTransferListComponent;
  let fixture: ComponentFixture<PointTransferListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointTransferListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointTransferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
