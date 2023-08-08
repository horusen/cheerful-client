import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionIndividualHeaderComponent } from './section-individual-header.component';

describe('SectionIndividualHeaderComponent', () => {
  let component: SectionIndividualHeaderComponent;
  let fixture: ComponentFixture<SectionIndividualHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionIndividualHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionIndividualHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
