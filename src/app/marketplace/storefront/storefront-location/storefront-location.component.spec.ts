import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorefrontLocationComponent } from './storefront-location.component';

describe('StorefrontLocationComponent', () => {
  let component: StorefrontLocationComponent;
  let fixture: ComponentFixture<StorefrontLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorefrontLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorefrontLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
