import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionIndividualComponent } from './connection-individual.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { SharedConnectionModule } from 'src/app/sectio-business/connection/shared-connection/shared-connection.module';

const routes: Routes = [
  {
    path: '',
    component: ConnectionIndividualComponent,
  },
];

@NgModule({
  declarations: [ConnectionIndividualComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    SharedConnectionModule,
  ],
  exports: [RouterModule],
})
export class ConnectionIndividualModule {}
