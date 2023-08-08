import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceStoreDetailsComponent } from './marketplace-store-details.component';

describe('MarketplaceStoreDetailsComponent', () => {
  let component: MarketplaceStoreDetailsComponent;
  let fixture: ComponentFixture<MarketplaceStoreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketplaceStoreDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketplaceStoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
