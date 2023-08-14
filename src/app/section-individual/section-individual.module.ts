import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionIndividualComponent } from './section-individual.component';
import { SharedModule } from '../shared/shared.module';
import { Router, RouterModule, Routes } from '@angular/router';
import { SectionIndividualHeaderComponent } from './section-individual-header/section-individual-header.component';
import { SectionIndividualDashboardComponent } from './section-individual-dashboard/section-individual-dashboard.component';
import { DashboardModule } from '../dashboard/dashboard.module';

const routes: Routes = [
  {
    path: '',
    component: SectionIndividualComponent,
    children: [
      {
        path: 'marketplace',
        loadChildren: () =>
          import('../marketplace/marketplace.module').then(
            (m) => m.MarketplaceModule
          ),
      },
      {
        path: 'connections',
        loadChildren: () =>
          import('../section-business/connection/connection.module').then(
            (m) => m.ConnectionModule
          ),
      },

      {
        path: '',
        component: SectionIndividualDashboardComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [
    SectionIndividualComponent,
    SectionIndividualHeaderComponent,
    SectionIndividualDashboardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    DashboardModule,
  ],
  exports: [RouterModule],
})
export class SectionIndividualModule {}
