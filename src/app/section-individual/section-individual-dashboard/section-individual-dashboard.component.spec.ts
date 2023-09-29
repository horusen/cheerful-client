import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionIndividualDashboardComponent } from './section-individual-dashboard.component';

describe('SectionIndividualDashboardComponent', () => {
  let component: SectionIndividualDashboardComponent;
  let fixture: ComponentFixture<SectionIndividualDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionIndividualDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionIndividualDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
