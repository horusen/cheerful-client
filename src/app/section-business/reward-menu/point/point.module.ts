import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointComponent } from './point.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SharedPointModule } from '../shared-point/shared-point.module';

const routes: Routes = [
  {
    path: '',
    component: PointComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./point-transfer/point-transfer.module').then(
            (m) => m.PointTransferModule
          ),
      },
      {
        path: 'points',
        loadChildren: () =>
          import('./point-load/point-load.module').then(
            (m) => m.PointLoadModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [PointComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    SharedPointModule,
  ],
  exports: [RouterModule],
})
export class PointModule {}
