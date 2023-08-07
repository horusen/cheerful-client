import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMerchantDashboardComponent } from './section-merchant-dashboard.component';

describe('SectionMerchantDashboardComponent', () => {
  let component: SectionMerchantDashboardComponent;
  let fixture: ComponentFixture<SectionMerchantDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionMerchantDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionMerchantDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
