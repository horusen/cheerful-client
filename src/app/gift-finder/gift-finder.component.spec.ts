import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftFinderComponent } from './gift-finder.component';

describe('GiftFinderComponent', () => {
  let component: GiftFinderComponent;
  let fixture: ComponentFixture<GiftFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftFinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
