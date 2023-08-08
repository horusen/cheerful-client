import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessDashboardComponent } from './business-dashboard/business-dashboard.component';
import { SectionBusinessHeaderComponent } from './section-business-header/section-business-header.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { SectionBusinessComponent } from './section-business.component';

const routes: Routes = [
  {
    path: '',
    component: SectionBusinessComponent,
    children: [
      {
        path: 'settings',
        loadChildren: () =>
          import('./business/business-settings/business-settings.module').then(
            (m) => m.BusinessSettingsModule
          ),
      },
      {
        path: 'connections',
        loadChildren: () =>
          import('./connection/connection.module').then(
            (m) => m.ConnectionModule
          ),
      },
      {
        path: 'rewards',
        loadChildren: () =>
          import('./reward-menu/reward-menu.module').then(
            (m) => m.RewardMenuModule
          ),
      },
      {
        path: 'marketplace',
        loadChildren: () =>
          import('../marketplace/marketplace.module').then(
            (m) => m.MarketplaceModule
          ),
      },
      {
        path: '',
        component: BusinessDashboardComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [
    BusinessDashboardComponent,
    SectionBusinessHeaderComponent,
    SectionBusinessComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class SectionBusinessModule {}
