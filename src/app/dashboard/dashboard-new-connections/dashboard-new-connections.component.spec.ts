import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNewConnectionsComponent } from './dashboard-new-connections.component';

describe('DashboardNewConnectionsComponent', () => {
  let component: DashboardNewConnectionsComponent;
  let fixture: ComponentFixture<DashboardNewConnectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNewConnectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardNewConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
