import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePaymentMethodComponent } from './store-payment-method.component';

describe('StorePaymentMethodComponent', () => {
  let component: StorePaymentMethodComponent;
  let fixture: ComponentFixture<StorePaymentMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorePaymentMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorePaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
