import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftFinderStepFourComponent } from './gift-finder-step-four.component';

describe('GiftFinderStepFourComponent', () => {
  let component: GiftFinderStepFourComponent;
  let fixture: ComponentFixture<GiftFinderStepFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftFinderStepFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftFinderStepFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
