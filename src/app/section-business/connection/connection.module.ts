import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionComponent } from './connection.component';

const routes: Routes = [
  {
    path: '',
    component: ConnectionComponent,
    children: [
      {
        path: 'individual',
        loadChildren: () =>
          import('./connection-individual/connection-individual.module').then(
            (m) => m.ConnectionIndividualModule
          ),
      },
      {
        path: 'invitation',
        loadChildren: () =>
          import('./invitation/invitation.module').then(
            (m) => m.InvitationModule
          ),
      },
      {
        path: '',
        redirectTo: 'individual',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [ConnectionComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectionModule {}
