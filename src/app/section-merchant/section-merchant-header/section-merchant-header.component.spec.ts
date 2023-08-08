import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMerchantHeaderComponent } from './section-merchant-header.component';

describe('SectionMerchantHeaderComponent', () => {
  let component: SectionMerchantHeaderComponent;
  let fixture: ComponentFixture<SectionMerchantHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionMerchantHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionMerchantHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
