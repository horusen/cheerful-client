import { Component } from '@angular/core';
import { ConnectionIndividualListComponent } from 'src/app/section-business/connection/connection-individual/connection-individual-list/connection-individual-list.component';

@Component({
  selector: 'app-dashboard-new-connections',
  templateUrl: './dashboard-new-connections.component.html',
  styleUrls: ['./dashboard-new-connections.component.scss'],
})
export class DashboardNewConnectionsComponent extends ConnectionIndividualListComponent {}
