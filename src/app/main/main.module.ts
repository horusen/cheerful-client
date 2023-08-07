import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'business',
        loadChildren: () =>
          import('../section-business/section-business.module').then(
            (m) => m.SectionBusinessModule
          ),
      },
      {
        path: 'personal',
        loadChildren: () =>
          import('../section-individual/section-individual.module').then(
            (m) => m.SectionIndividualModule
          ),
      },
      {
        path: 'merchant',
        loadChildren: () =>
          import('../section-merchant/section-merchant.module').then(
            (m) => m.SectionMerchantModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainModule {}
