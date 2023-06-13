import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftFinderStepThreeComponent } from './gift-finder-step-three.component';

describe('GiftFinderStepThreeComponent', () => {
  let component: GiftFinderStepThreeComponent;
  let fixture: ComponentFixture<GiftFinderStepThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftFinderStepThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftFinderStepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
