import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftFinderStepTwoComponent } from './gift-finder-step-two.component';

describe('GiftFinderStepTwoComponent', () => {
  let component: GiftFinderStepTwoComponent;
  let fixture: ComponentFixture<GiftFinderStepTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftFinderStepTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftFinderStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
