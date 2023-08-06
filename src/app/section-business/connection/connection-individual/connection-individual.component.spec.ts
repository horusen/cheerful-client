import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionIndividualComponent } from './connection-individual.component';

describe('ConnectionIndividualComponent', () => {
  let component: ConnectionIndividualComponent;
  let fixture: ComponentFixture<ConnectionIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionIndividualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectionIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
