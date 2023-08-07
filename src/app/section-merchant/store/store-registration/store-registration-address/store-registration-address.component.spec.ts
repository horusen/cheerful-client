import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreRegistrationAddressComponent } from './store-registration-address.component';

describe('StoreRegistrationAddressComponent', () => {
  let component: StoreRegistrationAddressComponent;
  let fixture: ComponentFixture<StoreRegistrationAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreRegistrationAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreRegistrationAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
