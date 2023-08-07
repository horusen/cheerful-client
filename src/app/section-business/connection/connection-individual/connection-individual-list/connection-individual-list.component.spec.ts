import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionIndividualListComponent } from './connection-individual-list.component';

describe('ConnectionIndividualListComponent', () => {
  let component: ConnectionIndividualListComponent;
  let fixture: ComponentFixture<ConnectionIndividualListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionIndividualListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectionIndividualListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
