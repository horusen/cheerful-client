import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreCardCreateComponent } from './store-card-create.component';

describe('StoreCardCreateComponent', () => {
  let component: StoreCardCreateComponent;
  let fixture: ComponentFixture<StoreCardCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreCardCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreCardCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
