import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvitationComponent } from './invitation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { InvitationListComponent } from './invitation-list/invitation-list.component';

const routes: Routes = [
  {
    path: '',
    component: InvitationComponent,
    children: [
      {
        path: '',
        component: InvitationListComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [InvitationComponent, InvitationListComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitationModule {}
