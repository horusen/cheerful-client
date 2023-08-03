import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSettingsBusinessInformationComponent } from './business-settings-business-information.component';

describe('BusinessSettingsBusinessInformationComponent', () => {
  let component: BusinessSettingsBusinessInformationComponent;
  let fixture: ComponentFixture<BusinessSettingsBusinessInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessSettingsBusinessInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessSettingsBusinessInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
