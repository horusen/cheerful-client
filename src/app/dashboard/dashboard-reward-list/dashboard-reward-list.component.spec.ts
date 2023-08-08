import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRewardListComponent } from './dashboard-reward-list.component';

describe('DashboardRewardListComponent', () => {
  let component: DashboardRewardListComponent;
  let fixture: ComponentFixture<DashboardRewardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardRewardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardRewardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
