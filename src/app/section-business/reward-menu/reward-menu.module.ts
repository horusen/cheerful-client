import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RewardMenuComponent } from './reward-menu.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: RewardMenuComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./point/point.module').then((m) => m.PointModule),
      },
    ],
  },
];

@NgModule({
  declarations: [RewardMenuComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RewardMenuModule {}
