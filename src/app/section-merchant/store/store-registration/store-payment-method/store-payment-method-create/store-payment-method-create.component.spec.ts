import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePaymentMethodCreateComponent } from './store-payment-method-create.component';

describe('StorePaymentMethodCreateComponent', () => {
  let component: StorePaymentMethodCreateComponent;
  let fixture: ComponentFixture<StorePaymentMethodCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorePaymentMethodCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorePaymentMethodCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
