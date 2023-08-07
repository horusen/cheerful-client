import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreRegistrationAddressCreateComponent } from './store-registration-address-create.component';

describe('StoreRegistrationAddressCreateComponent', () => {
  let component: StoreRegistrationAddressCreateComponent;
  let fixture: ComponentFixture<StoreRegistrationAddressCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreRegistrationAddressCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreRegistrationAddressCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
