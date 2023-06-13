import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftFinderStepOneComponent } from './gift-finder-step-one.component';

describe('GiftFinderStepOneComponent', () => {
  let component: GiftFinderStepOneComponent;
  let fixture: ComponentFixture<GiftFinderStepOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftFinderStepOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftFinderStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
