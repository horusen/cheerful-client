import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorefrontGiftcardComponent } from './storefront-giftcard.component';

describe('StorefrontGiftcardComponent', () => {
  let component: StorefrontGiftcardComponent;
  let fixture: ComponentFixture<StorefrontGiftcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorefrontGiftcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorefrontGiftcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
