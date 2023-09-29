import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSocialMediaComponent } from './store-social-media.component';

describe('StoreSocialMediaComponent', () => {
  let component: StoreSocialMediaComponent;
  let fixture: ComponentFixture<StoreSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreSocialMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
