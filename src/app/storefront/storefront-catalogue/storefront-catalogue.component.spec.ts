import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorefrontCatalogueComponent } from './storefront-catalogue.component';

describe('StorefrontCatalogueComponent', () => {
  let component: StorefrontCatalogueComponent;
  let fixture: ComponentFixture<StorefrontCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorefrontCatalogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorefrontCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
