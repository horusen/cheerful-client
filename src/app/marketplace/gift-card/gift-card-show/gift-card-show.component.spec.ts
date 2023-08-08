import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftCardShowComponent } from './gift-card-show.component';

describe('GiftCardShowComponent', () => {
  let component: GiftCardShowComponent;
  let fixture: ComponentFixture<GiftCardShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftCardShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftCardShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
