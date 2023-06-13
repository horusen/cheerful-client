import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSocialMediaCreateComponent } from './store-social-media-create.component';

describe('StoreSocialMediaCreateComponent', () => {
  let component: StoreSocialMediaCreateComponent;
  let fixture: ComponentFixture<StoreSocialMediaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreSocialMediaCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreSocialMediaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
