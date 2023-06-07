import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipientDetailsComponent } from './add-recipient-details.component';

describe('AddRecipientDetailsComponent', () => {
  let component: AddRecipientDetailsComponent;
  let fixture: ComponentFixture<AddRecipientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRecipientDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRecipientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
