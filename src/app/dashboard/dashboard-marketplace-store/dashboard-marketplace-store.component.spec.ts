import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardMarketplaceStoreComponent } from './dashboard-marketplace-store.component';

describe('DashboardMarketplaceStoreComponent', () => {
  let component: DashboardMarketplaceStoreComponent;
  let fixture: ComponentFixture<DashboardMarketplaceStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardMarketplaceStoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardMarketplaceStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
