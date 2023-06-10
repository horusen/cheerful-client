import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreRegistrationBasicInformationCreateComponent } from './store-registration-basic-information-create.component';

describe('StoreRegistrationBasicInformationCreateComponent', () => {
  let component: StoreRegistrationBasicInformationCreateComponent;
  let fixture: ComponentFixture<StoreRegistrationBasicInformationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreRegistrationBasicInformationCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreRegistrationBasicInformationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
