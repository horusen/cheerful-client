import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorefrontAboutComponent } from './storefront-about.component';

describe('StorefrontAboutComponent', () => {
  let component: StorefrontAboutComponent;
  let fixture: ComponentFixture<StorefrontAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorefrontAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorefrontAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
