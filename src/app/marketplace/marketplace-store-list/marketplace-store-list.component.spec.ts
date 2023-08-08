import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceStoreListComponent } from './marketplace-store-list.component';

describe('MarketplaceStoreListComponent', () => {
  let component: MarketplaceStoreListComponent;
  let fixture: ComponentFixture<MarketplaceStoreListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketplaceStoreListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketplaceStoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
