import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreProductCreateComponent } from './store-product-create.component';

describe('StoreProductCreateComponent', () => {
  let component: StoreProductCreateComponent;
  let fixture: ComponentFixture<StoreProductCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreProductCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreProductCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
