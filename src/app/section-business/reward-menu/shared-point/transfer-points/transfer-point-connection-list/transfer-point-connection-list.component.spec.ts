import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferPointConnectionListComponent } from './transfer-point-connection-list.component';

describe('TransferPointConnectionListComponent', () => {
  let component: TransferPointConnectionListComponent;
  let fixture: ComponentFixture<TransferPointConnectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferPointConnectionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferPointConnectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
