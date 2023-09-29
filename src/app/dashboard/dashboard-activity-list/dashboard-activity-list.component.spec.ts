import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardActivityListComponent } from './dashboard-activity-list.component';

describe('DashboardActivityListComponent', () => {
  let component: DashboardActivityListComponent;
  let fixture: ComponentFixture<DashboardActivityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardActivityListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardActivityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
