import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBusinessComponent } from './section-business.component';

describe('SectionBusinessComponent', () => {
  let component: SectionBusinessComponent;
  let fixture: ComponentFixture<SectionBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
