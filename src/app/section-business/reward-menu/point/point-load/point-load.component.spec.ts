import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointLoadComponent } from './point-load.component';

describe('PointLoadComponent', () => {
  let component: PointLoadComponent;
  let fixture: ComponentFixture<PointLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointLoadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
