import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionMerchantComponent } from './section-merchant.component';
import { SectionMerchantHeaderComponent } from './section-merchant-header/section-merchant-header.component';
import { SectionMerchantDashboardComponent } from './section-merchant-dashboard/section-merchant-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SectionMerchantComponent,
    children: [
      {
        path: '',
        component: SectionMerchantDashboardComponent,
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./store/store.module').then((m) => m.StoreModule),
      },
    ],
  },
];

@NgModule({
  declarations: [
    SectionMerchantComponent,
    SectionMerchantHeaderComponent,
    SectionMerchantDashboardComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class SectionMerchantModule {}
