import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMerchantComponent } from './section-merchant.component';

describe('SectionMerchantComponent', () => {
  let component: SectionMerchantComponent;
  let fixture: ComponentFixture<SectionMerchantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionMerchantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
