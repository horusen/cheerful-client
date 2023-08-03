import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSettingsBusinessInformationEditComponent } from './business-settings-business-information-edit.component';

describe('BusinessSettingsBusinessInformationEditComponent', () => {
  let component: BusinessSettingsBusinessInformationEditComponent;
  let fixture: ComponentFixture<BusinessSettingsBusinessInformationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessSettingsBusinessInformationEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessSettingsBusinessInformationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
