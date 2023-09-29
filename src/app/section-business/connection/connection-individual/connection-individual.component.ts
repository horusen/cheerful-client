import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base-component';
import { Connection } from '../connection.mode';

@Component({
  selector: 'app-connection-individual',
  templateUrl: './connection-individual.component.html',
  styleUrls: ['./connection-individual.component.scss'],
})
export class ConnectionIndividualComponent extends BaseComponent<Connection> {
  constructor() {
    super();
  }
}
