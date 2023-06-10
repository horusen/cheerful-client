import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreRegistrationBasicInformationComponent } from './store-registration-basic-information.component';

describe('StoreRegistrationBasicInformationComponent', () => {
  let component: StoreRegistrationBasicInformationComponent;
  let fixture: ComponentFixture<StoreRegistrationBasicInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreRegistrationBasicInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreRegistrationBasicInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
