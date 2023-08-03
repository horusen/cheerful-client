import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBusinessHeaderComponent } from './section-business-header.component';

describe('SectionBusinessHeaderComponent', () => {
  let component: SectionBusinessHeaderComponent;
  let fixture: ComponentFixture<SectionBusinessHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBusinessHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionBusinessHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
