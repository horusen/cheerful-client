import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardMarketplaceStoreComponent } from './dashboard-marketplace-store/dashboard-marketplace-store.component';
import { DashboardRewardListComponent } from './dashboard-reward-list/dashboard-reward-list.component';
import { DashboardActivityListComponent } from './dashboard-activity-list/dashboard-activity-list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardMarketplaceStoreComponent,
    DashboardRewardListComponent,
    DashboardActivityListComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [DashboardMarketplaceStoreComponent, DashboardActivityListComponent],
})
export class DashboardModule {}
